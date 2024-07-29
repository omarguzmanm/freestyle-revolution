<template>
  <div class="lg:w-2/5 lg:mx-auto lg:mt-14">
    <n-card>
      <n-tabs
        default-value="signin"
        size="large"
        animated
        pane-wrapper-style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <!-- Sign In Form -->
        <n-tab-pane name="signin" tab="Iniciar sesión">
          <n-form :model="form">
            <n-form-item-row label="Correo electrónico">
              <n-input
                v-model:value="form.email"
                :placeholder="'Escribe tu correo'"
              />
            </n-form-item-row>
            <n-form-item-row label="Contraseña">
              <n-input
                v-model:value="form.password"
                type="password"
                show-password-on="click"
                :maxlength="10"
                :placeholder="'Escribe tu contraseña'"
              />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong @click="login">
            Iniciar sesión
          </n-button>
        </n-tab-pane>

        <!-- Sign Up Form -->
        <n-tab-pane name="signup" tab="Registrarse">
          <n-form :model="form">
            <n-form-item-row label="Nombre">
              <n-input
                type="text"
                v-model:value="form.name"
                :placeholder="'Escribe tu nombre completo'"
              />
            
            </n-form-item-row>
            <n-form-item-row label="Correo electrónico">
              <n-input
                v-model:value="form.email"
                :placeholder="'Escribe tu correo'"
              />
            </n-form-item-row>
            <n-form-item-row label="Contraseña">
              <n-input
                type="password"
                v-model:value="form.password"
                :placeholder="'Escribe tu contraseña'"
              />
            </n-form-item-row>
            <!-- <n-form-item-row label="Confirmar contraseña">
              <n-input
                type="password"
                v-model:value="form.confirmPassword"
                :placeholder="'Confirma tu contraseña'"
              />
            </n-form-item-row> -->
          </n-form>
          <n-button type="primary" block secondary strong @click="register">
            Registrarme
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import {
  NCard,
  NTabs,
  NTabPane,
  NButton,
  NForm,
  NFormItemRow,
  NInput,
} from "naive-ui";
import { ref } from "vue";
import { UserCredentials } from "@/types/auth/User";
import { useAuthStore } from "@/stores/auth";

const form = ref<UserCredentials>({
  name: "",
  email: "",
  password: "",
  // confirmPassword: "",
});

const authStore = useAuthStore();

const login = (): void => {
  authStore.login(form.value);
};

const register = (): void => {  
  authStore.register(form.value);
};
</script>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
