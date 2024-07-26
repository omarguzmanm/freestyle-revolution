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
        <!-- Sign Up Form -->
        <n-tab-pane name="signin" tab="Iniciar sesión">
          <n-form :model="signinForm">
            <n-form-item-row label="Correo electrónico">
              <n-input :placeholder="'Escribe tu correo'" />
            </n-form-item-row>
            <n-form-item-row label="Contraseña">
              <n-input :placeholder="'Escribe tu contraseña'" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            Iniciar sesión
          </n-button>
        </n-tab-pane>

        <!-- Sign Up Form -->
        <n-tab-pane name="signup" tab="Registrarse">
          <n-form :model="signupForm">
            <n-form-item-row label="Nombre">
              <n-input :placeholder="'Escribe tu nombre completo'" />
            </n-form-item-row>
            <n-form-item-row label="Correo electrónico">
              <n-input :placeholder="'Escribe tu correo'" />
            </n-form-item-row>
            <n-form-item-row label="Contraseña">
              <n-input :placeholder="'Escribe tu contraseña'" />
            </n-form-item-row>
            <n-form-item-row label="Confirmar contraseña">
              <n-input :placeholder="'Confirma tu contraseña'" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
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
import { UserCredentials, UserSignup } from "../types/Auth/User";

const loginForm = ref<UserCredentials>({
  email: "",
  password: "",
});

const signin = ref<UserSignup>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

</script>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
