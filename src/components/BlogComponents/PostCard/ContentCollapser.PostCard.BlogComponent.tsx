const ContentCollapser = ({ content }: { content: string }) => {
  const formattedContent = content.replaceAll("#", "").replaceAll("-", "");

  return (
    <>
      {formattedContent.slice(0, 136)}
      <span className="opacity-[.5]">{formattedContent.slice(136, 140)}</span>
      <span className="opacity-[.3]">{formattedContent.slice(140, 144)}</span>
      <span className="opacity-[.2]">{formattedContent.slice(145, 148)}</span>
      <span className="opacity-[.1]">{formattedContent.slice(148, 152)}</span>
    </>
  );
};

export default ContentCollapser;
