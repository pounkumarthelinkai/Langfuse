import { cn } from "@/src/utils/tailwind";
import Link from "next/link";
import { VersionLabel } from "./VersionLabel";
import { env } from "@/src/env.mjs";
import { useUiCustomization } from "@/src/ee/features/ui-customization/useUiCustomization";
// removed lucide-react icons since we only render text now

export const LangfuseIcon = ({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg`}
    width={size}
    height={size}
    alt="thelinkai Icon"
    className={className}
  />
);

const LangfuseLogotypeOrCustomized = ({ size }: { size: "sm" | "xl" }) => {
  const uiCustomization = useUiCustomization();

  if (uiCustomization?.logoLightModeHref && uiCustomization?.logoDarkModeHref) {
    return (
      <div className="flex items-center">
        <span
          className={cn(
            "font-mono font-semibold leading-none group-data-[collapsible=icon]:hidden",
            size === "sm" ? "text-sm" : "text-xl",
          )}
        >
          thelinkai
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <span
        className={cn(
          "font-mono font-semibold leading-none group-data-[collapsible=icon]:hidden",
          size === "sm" ? "text-sm" : "text-xl",
        )}
      >
        thelinkai
      </span>
    </div>
  );
};

export const LangfuseLogo = ({
  className,
  size = "sm",
  version = false,
}: {
  size?: "sm" | "xl";
  className?: string;
  version?: boolean;
}) => {
  return (
    <div
      className={cn(
        "-mt-2 ml-1 flex flex-wrap gap-4 lg:flex-col lg:items-start",
        className,
      )}
    >
      {/* Langfuse Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <LangfuseLogotypeOrCustomized size={size} />
        </Link>
        {version && (
          <VersionLabel className="ml-2 group-data-[collapsible=icon]:hidden" />
        )}
      </div>
    </div>
  );
};
