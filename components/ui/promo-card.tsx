type TProps = {
  code: string;
  discount: string;
};

export default function PromoCard({ code, discount }: TProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-4 py-3 mt-2">
      <span className="text-lg">🏷️</span>
      <p className="text-sm text-muted-foreground">
        Use code{" "}
        <span className="font-bold text-foreground tracking-wider">{code}</span>{" "}
        at checkout for{" "}
        <span className="text-primary font-semibold">{discount}</span> any plan
      </p>
    </div>
  );
}
