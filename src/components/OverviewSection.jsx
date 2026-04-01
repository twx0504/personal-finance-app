import SectionHeader from "./SectionHeader";

const OverviewSection = ({
  title,
  link,
  linkDescription = "See Details",
  children,
  headerClassName  = "",
}) => {
  return (
    <section className="pl-250 pr-250 pt-300 pb-300 bg-white mt-400 rounded-lg md:p-400">
      <SectionHeader
        title={title}
        link={link}
        linkDescription={linkDescription}
        headerClassName ={headerClassName }
      />
      {children}
    </section>
  );
};

export default OverviewSection;
