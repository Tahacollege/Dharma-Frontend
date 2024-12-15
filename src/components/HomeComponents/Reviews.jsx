import user1 from "../../assets/ImageAndIcons/user1.png";
import user2 from "../../assets/ImageAndIcons/user2.png";
import user3 from "../../assets/ImageAndIcons/user3.png";
import user4 from "../../assets/ImageAndIcons/user4.png";
import comma from "../../assets/ImageAndIcons/commas.png";
function Reviews() {
  const arr = [
    {
      img: user1,
      review:
        "Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
      user: "Alex Martin",
      position: "[CEO of PetConnect]",
      star: "⭐⭐⭐⭐⭐",
      comma_img: comma,
    },
    {
      img: user2,
      review:
        "Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
      user: "Alex Martin",
      position: "[CEO of PetConnect]",
      star: "⭐⭐⭐⭐⭐",
      comma_img: comma,
    },
    {
      img: user3,
      review:
        "Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
      user: "Alex Martin",
      position: "[CEO of PetConnect]",
      star: "⭐⭐⭐⭐⭐",
      comma_img: comma,
    },
    {
      img: user4,
      review:
        "Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
      user: "Alex Martin",
      position: "[CEO of PetConnect]",
      star: "⭐⭐⭐⭐⭐",
      comma_img: comma,
    },
  ];
  return (
    <>
      <div className="hidden md:flex p-6  w-full flex-wrap justify-center items-center">
        {arr.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <div className="w-[250px] ml-5 mt-3 p-5 bg-white rounded-2xl">
                <div className="p-1 rounded-2xl grid h-20">
                  <img src={item.comma_img} className="h-12 mx-auto my-4" />
                </div>
                <h2 className="font-bold text-sm mt-2 text-center capitalize">
                  {item.review}
                </h2>
                <h2 className="font-bold text-sm mt-2 text-center">
                  {item.star}
                </h2>
                <div className="p-1 rounded-2xl grid h-20">
                  <img src={item.img} className="h-12 mx-auto my-4" />
                </div>
                <h2 className="font-bold text-sm mt-2 text-center">
                  {item.user}
                </h2>
                <h2 className="text-xs mt-2 text-center">{item.position}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Reviews;
