<script lang="ts">
	const changeTheme = () => {
		if (document.documentElement.getAttribute('data-theme') === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			localStorage.theme = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	};
</script>

<button class="link-hover link" on:click={changeTheme}>Change Theme</button>
