import axios from 'axios';

const INDICATION_API_BASE_URL = "http://35.178.91.217:3003";

class IndicationService {

    getIndication(){
        return axios.get(INDICATION_API_BASE_URL+'/indication-list');
    }

    createIndication(indication){
        return axios.post(INDICATION_API_BASE_URL+'/indication-save', indication);
    }

    getIndicationById(indicationId){
        return axios.get(INDICATION_API_BASE_URL + '/indication-details/' + indicationId);
    }

    updateIndication(indication, indicationId){
        return axios.put(INDICATION_API_BASE_URL + '/indication-save/' + indicationId, indication);
    }

    deleteIndication(indicationId){
        return axios.delete(INDICATION_API_BASE_URL + '/indication-delete/' + indicationId);
    }
}

export default new IndicationService()