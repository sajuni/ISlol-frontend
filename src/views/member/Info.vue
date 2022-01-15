<template>
    <div>
        <t-area>
            <template #title>회원정보</template>
            <template #text></template>
            <template #content>
            <div class="member_info_form">    
                <b-form>
                    <b-form-input
                        class="mb-4"
                        v-model="form.email"
                        type="email"
                        placeholder="이메일"
                        disabled
                    ></b-form-input>

                    <b-form-input
                        class="mb-4"                    
                        v-model="form.oldpwd"
                        type="password"
                        placeholder="현재 비밀번호"
                    >
                    </b-form-input>

                    <b-form-input
                        class="mb-4"                    
                        v-model="form.newpwd"
                        type="password"
                        placeholder="새 비밀번호"
                    >
                    </b-form-input>

                    <b-form-input
                        class="mb-4"                    
                        v-model="form.newpwd2"
                        type="password"
                        placeholder="새 비밀번호 확인"
                    >
                    </b-form-input>
                    
                    <b-form-input
                        class="mb-4"                    
                        v-model="form.addr"
                        type="text"
                        placeholder="주소"
                    >
                    </b-form-input>
                </b-form>
                <div class="mt-5 mb-5">
                    <b-button disabled size="lg" variant="primary">Disabled</b-button>
                    <b-button disabled size="lg">Also Disabled</b-button>
                </div>
            </div>
            </template>
        </t-area>
      
    </div>
</template>

<style scoped>
.form-group { text-align: left !important}
.form-control { 
    width: 450px;
    height: 50px;
}
</style>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                oldpwd: '',
                newpwd: '',
                newpwd2: '',
                addr: ''
            }
        }
    },
    mounted() {
        const user = this.$store.getters['auth/getUser'];
        this.form.email = user.email;
        this.form.addr = user.addr;
    }
    
}
</script>