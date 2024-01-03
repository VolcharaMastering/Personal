import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({
  params: {id},
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

function Project({ params: { id } }: Props) {
  return <div>Project {id}</div>;
}

export default Project;
