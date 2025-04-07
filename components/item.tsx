export const Item = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border-2 border-yellow-400 w-3 h-3 rounded-full"></div>
      <p className="text-gray-900">
        {content || "Leave here early so we can do this"}
      </p>
    </div>
  );
};
