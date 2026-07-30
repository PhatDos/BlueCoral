type LogoProps = {
  size: number;
};

const BASE_HEIGHT = 48;
const BASE_WIDTH = 139;
const BASE_GAP = 4;
const BASE_WORDMARK_SIZE = 32;
const BASE_ICON_WIDTH = 25;
const BASE_ICON_HEIGHT = 27;
const BASE_ICON_TOP = 10;
const BASE_ICON_LEFT = 11;

export default function Logo({ size }: LogoProps) {
  const scale = size / BASE_HEIGHT;
  const width = BASE_WIDTH * scale;
  const circleSize = size;
  const innerGap = BASE_GAP * scale;
  const wordmarkSize = BASE_WORDMARK_SIZE * scale;
  const iconWidth = BASE_ICON_WIDTH * scale;
  const iconHeight = BASE_ICON_HEIGHT * scale;
  const iconTop = BASE_ICON_TOP * scale;
  const iconLeft = BASE_ICON_LEFT * scale;

  return (
    <div className="inline-flex items-center shrink-0" style={{ width, height: size, gap: innerGap }}>
      <div className="relative shrink-0 rounded-full bg-[#BFFB4F]" style={{ width: circleSize, height: circleSize }}>
        <img
          src="/images/Logo.png"
          alt="Q logo"
          className="absolute object-contain"
          style={{ width: iconWidth, height: iconHeight, top: iconTop, left: iconLeft }}
        />
      </div>
      <span className="font-black leading-none tracking-[-0.04em] text-[#2D2F33]" style={{ fontSize: wordmarkSize }}>
        table
      </span>
    </div>
  );
}
