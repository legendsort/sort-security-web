export interface Env {
  supabasePublicAnon: string;
  supabaseUrl: string;
}

const getEnv = (): Env => {
  if (!process?.env?.SUPABASE_ANON_PUBLIC) throw "Require SUPABASE_ANON_PUBLIC";
  if (!process?.env?.SUPABASE_URL) throw "Require SUPABASE_PUBLIC_URL";

  return {
    supabasePublicAnon: process.env.SUPABASE_ANON_PUBLIC,
    supabaseUrl: process.env.SUPABASE_URL,
  };
};

export { getEnv };
