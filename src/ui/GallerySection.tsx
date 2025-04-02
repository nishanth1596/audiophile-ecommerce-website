import { Link } from "react-router-dom";

function GallerySection() {
  return (
    <section className="mx-6 mt-10">
      <div className="bg-LightGray relative rounded-lg text-center">
        <h3 className="text-PureBlack pt-[5.5rem] text-[0.94rem] leading-5 font-bold tracking-[1.07px] uppercase">
          Headphones
        </h3>
        <Link to="/" className="mt-4 flex items-center justify-center">
          <span className="text font-bold opacity-50">shop</span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
