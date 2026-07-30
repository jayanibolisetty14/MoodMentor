interface Props {
  text: string;
}

export default function GradientButton({ text }: Props) {
  return (
    <button
      className="
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      to-indigo-600
      px-8
      py-4
      text-white
      font-semibold
      transition
      hover:scale-105
      hover:shadow-xl
      hover:shadow-violet-600/30
      "
    >
      {text}
    </button>
  );
}