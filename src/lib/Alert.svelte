<script lang="ts">
	export let alertType: string = 'alert-success';
	export let message: string | unknown;
</script>

<div class={'alert ' + alertType + ' shadow-lg'}>
	<div>
		<span>{message}</span>
	</div>
</div>
