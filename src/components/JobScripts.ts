import { ref, onMounted, reactive } from "vue";
import { useRoute } from 'vue-router';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'JobView',
    //获取攻击范围图标
    getRangeImage(rangeType) {
        return "../../assets/rangeUI/" + rangeType + ".png";
    },
    setup() {
        const skills = ref(null);
        const roleSkills = ref(null);
        const traits = ref(null);
        const currentRoute = useRoute().path.substring(1) + ".json";
        var response = null;
        const today = moment(new Date()).format('YYYY-MM-DD');
        const jobClassType = 'job__header--' + useRoute().path.substring(1).toLowerCase();
        const headers = reactive({
            headerBackgroudPic: '',
            jobAttackTypePic: '',
            jobAttackType: '',
        })

        const loadData = async () => {
            try {
                response = await axios.get('./JobSkills/Skills/' + currentRoute);
                skills.value = response.data;
                response = await axios.get('./JobSkills/RoleSkills/' + currentRoute);
                roleSkills.value = response.data;
                response = await axios.get('./JobSkills/Traits/' + currentRoute);
                traits.value = response.data;
                response = await axios.get('./WebResource/pic/' + currentRoute);

                headers.headerBackgroudPic = response.data[0].headerBackgroudPic
                headers.jobAttackTypePic = response.data[0].jobAttackTypePic
                headers.jobAttackType = response.data[0].jobAttackType
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        onMounted(() => {
            loadData();
        });

        return {
            skills,
            roleSkills,
            traits,
            today,
            headers,
            jobClassType
        };
    }
}
