function PersonCard({ name, description, image, scholarLink, linkedinLink }) {
  return (
    <div className=" w-96 h-32 flex justify-start bg-white rounded-2xl border border-gray-400 px-4 py-4 shadow-sm mx-4 my-4">
      <img
        src={`/img/committee/${image}.jpg`}
        alt=""
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="ml-3">
        <h3 className="text-md font-bold text-black-primary">{name}</h3>
        <p className="text-xs text-gray-primary">{description}</p>
      </div>
    </div>
  );
}

export default PersonCard;
