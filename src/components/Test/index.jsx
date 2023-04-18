import useGetArticlesData from "../../../hooks/useGetArticlesData";

const Test = () => {

  const {filteredTags} = useGetArticlesData();

  console.log(filteredTags);

  return (
    <div>
      test
    </div>
  );
}

export default Test