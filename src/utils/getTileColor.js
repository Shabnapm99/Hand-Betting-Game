export function getTileColor(suit) {
  switch (suit) {
    case "dots":
      return {
        text: "text-cyan-400",
        glow: "shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:border-cyan-500/50",
        badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      };

    case "bamboo":
      return {
        text: "text-primary",
        glow: "shadow-[0_0_15px_rgba(130,219,111,0.15)] hover:border-[var(--color-primary)]/50",
        badge: "bg-primary/10 text-primary border-primary/20"
      };

    case "character":
      return {
        text: "text-fuchsia-400",
        glow: "shadow-[0_0_15px_rgba(232,121,249,0.15)] hover:border-fuchsia-500/50",
        badge: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
      };

    case "wind":
      return {
        text: "text-slate-300",
        glow: "shadow-[0_0_15px_rgba(203,213,225,0.1)] hover:border-slate-400/50",
        badge: "bg-slate-500/10 text-slate-300 border-slate-500/20"
      };

    case "dragon":
      return {
        text: "text-secondary",
        glow: "shadow-[0_0_15px_rgba(255,180,172,0.15)] hover:border-secondary/50",
        badge: "bg-secondary/10 text-secondary border-secondary/20"
      };

    default:
      return {
        text: "text-on-surface",
        glow: "shadow-none hover:border-outline-variant",
        badge: "bg-white/5 text-on-surface border-white/10"
      };
  }
}