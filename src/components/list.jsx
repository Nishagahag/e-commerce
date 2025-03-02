import { MdOutlineArrowForwardIos } from "react-icons/md";

const List = () => {
  return (
    <>
      <div className="justify-items-center p-10 text-2xl ">
        <section>
          <div className="flex  ">
            <div>Women</div>
            <MdOutlineArrowForwardIos />
          </div>
          <div className="flex">
            <div>Men</div>
            <MdOutlineArrowForwardIos />
          </div>
          <div>Electronics</div>
          <div>Home</div>
          <div>Medicine</div>
          <div>Sports</div>
          <div>Baby</div>
          <div>Grocery</div>
          <div>Health</div>
        </section>
      </div>
    </>
  );
};
export default List;
