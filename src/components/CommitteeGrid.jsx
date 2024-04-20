import PersonCard from "./PersonCard";

function CommitteeGrid({ people, title }) {
  return (
    <div className="mt-8 mb-24">
      <h2 className="text-3xl text-center font-semibold text-blue-primary mb-8">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {people.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            description={person.description}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CommitteeGrid;
