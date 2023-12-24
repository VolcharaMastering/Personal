type Props = {
  params: {
    id: string;
  };
};

function Project({ params: { id } }: Props) {
  return <div>Project {id}</div>;
}

export default Project;
