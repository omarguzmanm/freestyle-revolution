<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Mis Competencias</h1>
      <n-space>
        <n-button icon-placement="right" type="primary">
          <template #icon>
            <n-icon>
              <AddCircle16Regular />
            </n-icon>
          </template>
          Crear competencia
        </n-button>
      </n-space>
    </div>
    <div class="my-10">
      <n-grid :x-gap="28" :y-gap="17" :cols="3">
        <n-grid-item v-for="tournament in tournaments" :key="tournament.id">
          <TournamentList :tournament="tournament" />
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NSpace, NIcon, NGrid, NGridItem } from "naive-ui";
import { AddCircle16Regular } from "@vicons/fluent";
import TournamentList from "@/components/lists/TournamentList.vue";
import { onMounted, ref } from "vue";
import tournamentService from "@/services/tournamentService";
import { Tournament } from "@/interfaces/Tournament";

const tournaments = ref<Tournament[]>([]);

onMounted(async () => {
  tournaments.value = await tournamentService.getTournaments();
});
</script>

<style scoped></style>
