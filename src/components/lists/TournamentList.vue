<template>
  <n-card>
    <template #cover>
      <img :src="tournament.image" width="900" height="400" />
    </template>
    <template #header> {{ tournament.title }} </template>
    <template #default>
      <p>
        {{ tournament.description }}
      </p>
    </template>
    <template #action>
      <n-collapse>
        <n-collapse-item title="Info" name="1">
          <div>{{ tournament.location }}</div>
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NCollapse, NCollapseItem } from "naive-ui";
import { Tournament } from "@/interfaces/Tournament";
import { defineProps } from "vue";

defineProps<{ tournament: Tournament }>();


</script>
