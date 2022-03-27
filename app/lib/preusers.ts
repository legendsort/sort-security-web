import { createClient, PostgrestError } from "@supabase/supabase-js";
import { Env, getEnv } from "~/config/env";

interface Err {
  message: string;
}

interface Ret {
  errors?: Err[];
  data: any;
}

export async function createPreuser(form: FormData, env: Env): Promise<Ret> {
  const { supabasePublicAnon, supabaseUrl } = env;

  const supabase = createClient(supabaseUrl, supabasePublicAnon);

  let email = form.get("email");

  /*let err = new Error("Validation failed");*/
  if (!email) {
    return { error: [{ email: "Cannot be empty" }] };
  }

  const { data, error } = await supabase
    .from("leads")
    .insert([{ email: form.get("email") }], { returning: "minimal" });

  const leadText = "Inbound from startup.dev: " + email;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: leadText }),
  };
  fetch(
    "https://hooks.slack.com/services/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",
    requestOptions
  );

  if (error) {
    console.log(error);
  }

  return {
    data,
    error,
  };
}
