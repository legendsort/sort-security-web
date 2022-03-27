interface Props {
  children: any;
}

export default function Slide(props: Props) {
  const { children } = props;
  return <div className="h-screen  h-3/4 min-w-fit">{children}</div>;
}
