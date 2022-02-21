<template>
	<footer>
		<section class="copyright">
			현재 위치: <b>{{test}}</b><br>
			© HYO ISLOL Corp.
		</section>
	</footer>
</template>

<script>
export default {
	
	computed: {
		test() {
			return this.$store.getters['kakao/getLocation'];
		} 
	}
}
</script>
