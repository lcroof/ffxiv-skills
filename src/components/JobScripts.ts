import { ref, onMounted, reactive } from "vue";
import { useRoute } from 'vue-router';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'JobView',
    methods: {
        getRangeImage(ranger) {
            if (ranger === "circle") {
                return this.globalAttributes.circle;
            } else if (ranger == "zero") {
                return this.globalAttributes.zero
            }else if (ranger == "sector") {
                return this.globalAttributes.sector
            }else if (ranger == "line") {
                return this.globalAttributes.line
            }
        },
    },    
    setup() {
        const skills = ref(null);
        const roleSkills = ref(null);
        const traits = ref(null);
        const roleTraits = ref(null);
        const specialSkills = ref(null);
        const currentRoute = useRoute().path.substring(1) + ".json";
        var response = null;
        const today = moment(new Date()).format('YYYY-MM-DD');
        const jobClassType = 'job__header--' + useRoute().path.substring(1).toLowerCase();
        const headers = reactive({})
        const globalAttributes = reactive({});

        const loadData = async () => {
            try {
                response = await axios.get('./JobSkills/Skills/' + currentRoute);
                skills.value = response.data;
                response = await axios.get('./JobSkills/RoleSkills/' + currentRoute);
                roleSkills.value = response.data;
                response = await axios.get('./JobSkills/Traits/' + currentRoute);
                traits.value = response.data;
                response = await axios.get('./JobSkills/RoleTraits/' + currentRoute);
                roleTraits.value = response.data;
                response = await axios.get('./WebResource/' + currentRoute);
                Object.assign(headers, response.data[0]);
                response = await axios.get('./WebResource/GlobalAttributes.json');
                Object.assign(globalAttributes, response.data[0]);
                try {
                    response = await axios.get('./JobSkills/SpecialSkills/' + currentRoute);
                    specialSkills.value = response.data;
                } catch(error) {
                    console.error();
                }
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
            roleTraits,
            today,
            headers,
            jobClassType,
            globalAttributes,
            specialSkills
        };
    }
}
