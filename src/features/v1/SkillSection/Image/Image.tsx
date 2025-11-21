export const Image = () => {
  return (
    <div
      className="relative aspect-square max-w-md mx-auto md:ml-auto animate-fade-in"
      style={{ animationDelay: "1s" }}
    >
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 p-2">
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20">
          <img
            src="/lovable-uploads/3e1d3840-2036-46b8-a7fb-261be3a76a0f.png"
            alt="Monirul Islam"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-primary opacity-30 animate-spin"
        style={{ animationDuration: "8s" }}
      />
    </div>
  );
};
