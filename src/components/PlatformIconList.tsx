// Models
import { IPlatform } from "../core/models/platform.model";
// CharkaUI
import { HStack, Icon } from "@chakra-ui/react";
// ReactIcons
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";

interface PlatformIconListProps {
  platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
