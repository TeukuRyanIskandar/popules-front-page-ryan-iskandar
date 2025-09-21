<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiDotsGrid,
  mdiAccount,
  mdiCog,
  mdiInformation,
  mdiHome,
  mdiEmail,
  mdiBell,
} from "@mdi/js";

const dotsGridIcon = mdiDotsGrid;
const accountIcon = mdiAccount;
const cogIcon = mdiCog;
const infoIcon = mdiInformation;
const homeIcon = mdiHome;
const emailIcon = mdiEmail;
const bellIcon = mdiBell;

const handleIconClick = (iconName: string) => {
  console.log(`Icon "${iconName}" clicked!`);
};
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="circle" size="icon">
        <SvgIcon type="mdi" :path="dotsGridIcon" class="!w-6 !h-6" />
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-2">
      <div>
        <h2>Quick Access</h2>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <Button variant="ghost" size="icon" @click="handleIconClick('Account')">
          <SvgIcon type="mdi" :path="accountIcon" class="!w-6 !h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          @click="handleIconClick('Settings')"
        >
          <SvgIcon type="mdi" :path="cogIcon" class="!w-6 !h-6" />
        </Button>
        <Button variant="ghost" size="icon" @click="handleIconClick('Info')">
          <SvgIcon type="mdi" :path="infoIcon" class="!w-6 !h-6" />
        </Button>

        <Button variant="ghost" size="icon" @click="handleIconClick('Home')">
          <SvgIcon type="mdi" :path="homeIcon" class="!w-6 !h-6" />
        </Button>
        <Button variant="ghost" size="icon" @click="handleIconClick('Email')">
          <SvgIcon type="mdi" :path="emailIcon" class="!w-6 !h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          @click="handleIconClick('Notifications')"
        >
          <SvgIcon type="mdi" :path="bellIcon" class="!w-6 !h-6" />
        </Button>
      </div>
    </PopoverContent>
  </Popover>
</template>
