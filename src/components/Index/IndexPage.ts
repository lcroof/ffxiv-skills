import { ref, onMounted } from "vue";
import axios from 'axios';

export default {
    name: 'Index',
    setup() {
        const allJobs = ref([]);
        let tankJobs = ref(null);
        let healerJobs = ref(null);
        let meeleJobs = ref(null);
        let physicalRangedJobs = ref(null);
        let magicalRangedJobs = ref(null);
        var response = null;

        const loadData = async () => {
            try {
                response = await axios.get('./WebResource/IndexJob.json');
                allJobs.value = response.data;

                allJobs.value.forEach(() => {
                    tankJobs.value = allJobs.value.filter(item => item.jobType === 'tank');
                    healerJobs.value = allJobs.value.filter(item => item.jobType === 'healer')
                    meeleJobs.value = allJobs.value.filter(item => item.jobType === 'meele')
                    physicalRangedJobs.value = allJobs.value.filter(item => item.jobType === 'physicalRanged')
                    magicalRangedJobs.value = allJobs.value.filter(item => item.jobType === 'magicalRanged')
                    return;
                });
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        onMounted(() => {
            loadData();
        });

        return {
            tankJobs,
            healerJobs,
            meeleJobs,
            physicalRangedJobs,
            magicalRangedJobs,
        };
    }
}
