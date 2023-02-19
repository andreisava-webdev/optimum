import { Flex, Stack, Text } from '@mantine/core';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineCalendarToday,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlineTask,
  MdPeopleOutline,
} from 'react-icons/md';

import { SidebarLink } from './SidebarLink';

export const Sidebar = () => {
  return (
    <Stack spacing={0} h="100%" w={200} bg="brand">
      <Flex align="center" justify="center" h={50}>
        <Text color="brand.0" transform="uppercase" fw={700} lts={2} size={20}>
          Optimum
        </Text>
      </Flex>

      <Stack spacing={0} mt={30}>
        <SidebarLink
          text="Dashboard"
          path="/dashboard"
          icon={MdOutlineDashboard}
        />
        <SidebarLink text="Agents" path="/agents" icon={MdPeopleOutline} />
        <SidebarLink
          text="Time off"
          path="/timeoff"
          icon={MdOutlineCalendarToday}
        />
        <SidebarLink text="Tasks" path="/tasks" icon={MdOutlineTask} />

        <SidebarLink
          text="Admin"
          path="/admin"
          icon={MdOutlineAdminPanelSettings}
        />

        <SidebarLink text="Profile" path="/profile" icon={MdOutlineSettings} />
      </Stack>
    </Stack>
  );
};
