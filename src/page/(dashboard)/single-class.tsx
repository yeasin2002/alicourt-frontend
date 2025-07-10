interface Props extends React.ComponentProps<"div"> {}

export const SingleClassPage = ({ ...props }: Props) => {
  return <div {...props}></div>;
};
