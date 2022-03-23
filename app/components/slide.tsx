interface Props {
  children: any;
}

export default function Slide(props: Props) {
  const { children } = props;
  return <div className="h-screen">{children}</div>;
}
