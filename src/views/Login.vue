<script setup>
import { ref, watch } from "vue";
import { usePlayerStore } from "../stores/player.js";
import { useRouter } from 'vue-router'
const router = useRouter()
const player = usePlayerStore();
const name = ref("");
const button = ref(null);
watch(name, name => {
	if (name.length >= 2) {
		button.value.removeAttribute("disabled");
	} else {
		button.value.setAttribute("disabled", true);
	}
});
function handleSubmit() {
	player.setName(name)
	router.push('/game')
}

</script>
<template>
	<div class="login">
		<div class="login-header">
			<img src="../assets/brain.png" alt="brain icon" class="brain" />
			<h1 class="title">Memory game</h1>
		</div>
		<form class="login-form" @submit.prevent="handleSubmit()">
			<input
				type="text"
				placeholder="Name"
				class="login-input"
				v-model="name"
			/>
			<button ref="button" type="submit" class="login-button" disabled>
				Play
			</button>
		</form>
	</div>
</template>

<style lang="postcss">
.login {
	@apply h-screen flex items-center justify-center flex-col font-pressStart;
	& .login-header {
		@apply w-full mb-12 flex flex-col justify-center items-center;
		& .brain {
			@apply w-24;
		}
		& .title {
			@apply text-3xl text-primary;
		}
	}
	& .login-form {
		@apply flex flex-col;
		& .login-input {
			@apply w-full mb-4 p-4 max-w-xs border-2 border-primary rounded-lg text-base outline-none;
		}
		& .login-button {
			@apply w-full p-4 bg-pink text-white rounded-lg cursor-pointer text-base max-w-xs;
		}
		& .login-button:disabled {
			@apply bg-light-gray text-gray cursor-auto;
		}
	}
}
</style>
