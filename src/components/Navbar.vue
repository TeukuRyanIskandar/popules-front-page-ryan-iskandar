<script setup lang="ts">
import NavigationMenu from "./ui/navigation-menu/NavigationMenu.vue";
import NavigationMenuList from "./ui/navigation-menu/NavigationMenuList.vue";
import NavigationMenuItem from "./ui/navigation-menu/NavigationMenuItem.vue";
import Input from "./ui/input/Input.vue";
import Button from "./ui/button/Button.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiAccountCircleOutline,
  mdiBell,
  mdiDotsGrid,
  mdiMagnify,
} from "@mdi/js";
</script>

<template>
  <NavigationMenu class="">
    <NavigationMenuList class="">
      <!-- Left Section -->
      <section class="flex items-center gap-4">
        <NavigationMenuItem class="">
          <img
            src="../../public/popules_logo.png"
            class="sm:w-[10rem] w-[7rem]"
          />
        </NavigationMenuItem>

        <NavigationMenuItem class="relative">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            class="pr-10"
          />
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
          >
            <SvgIcon type="mdi" :path="mdiMagnify" class="w-5 h-5" />
          </span>
        </NavigationMenuItem>
      </section>

      <!-- Right Section -->
      <section class="flex gap-2 items-center">
        <NavigationMenuItem>
          <Button variant="brand" class="font-semibold">Post</Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="circle">
            <SvgIcon type="mdi" :path="mdiDotsGrid" />
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="circle">
            <SvgIcon type="mdi" :path="mdiBell" :size="36" />
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="circle">
            <SvgIcon type="mdi" :path="mdiAccountCircleOutline" :size="36" />
          </Button>
        </NavigationMenuItem>
      </section>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style>
[data-slot="navigation-menu"] > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
