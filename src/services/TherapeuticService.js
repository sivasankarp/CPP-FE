import axios from 'axios';

const THERAPEUTIC_API_BASE_URL = "https://main.d5h7r8fqfqlck.amplifyapp.com/";

class TherapeuticService {

    getTherapeutic(){
        return axios.get(THERAPEUTIC_API_BASE_URL+'/therapeutic-list');
    }

    createTherapeutic(therapeutic){
        return axios.post(THERAPEUTIC_API_BASE_URL+'/therapeutic-save', therapeutic);
    }

    getTherapeuticById(therapeuticId){
        return axios.get(THERAPEUTIC_API_BASE_URL + '/therapeutic-details/' + therapeuticId);
    }

    updateTherapeutic(therapeutic, therapeuticId){
        return axios.put(THERAPEUTIC_API_BASE_URL + '/therapeutic-save/' + therapeuticId, therapeutic);
    }

    deleteTherapeutic(therapeuticId){
        return axios.delete(THERAPEUTIC_API_BASE_URL + '/therapeutic-delete/' + therapeuticId);
    }
}

export default new TherapeuticService()