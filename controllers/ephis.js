import { v4 as uuidv4 } from 'uuid'; 

let ephis = [
    {
        Patient: {
            patientName: "Tariq Salman",
            patientAge: 24,
            Contact: {
                phoneNumber: "0911111110",
                homePhone: "0000000",
                email: "TariqS@gmail.com"
            }
        },
        medicalHistories: [
            {
                diseaseName: "headache",
                medication: "acamol",
                habits: "drinking alot of energy drinks"
            }
        ],
        Visits: [
            {
                visitDate: "22/4/2021",
                visitDiagnosis: "he need to take more rest",
                mesdicatioon: "cidamol"
            }
        ],
        chiefComplaint: " frequent headache ",
        historyOfPresentIllness: "from 3 weeks",
        physicalExamination: "no physical issues",
        assessmentAndPlan: "take the medication for the next 2 weeks after that we will do another tests",
        currentIllnessMedication: "acamol + rest",
        progressNotes: " form the last vist nothing change",
        Insurance: {
            provider: "trust",
            agent: "tamer",
            coverage: "100%",
            policyNumber: 1232223322,
            insuranceNumber: "02888777222"
        },
        id: "e5f9ae4b-3c7e-4219-ad88-7d9f0add46b5"
    },
    {
        Patient: {
            patientName: "monther samara",
            patientAge: 64,
            Contact: {
                phoneNumber: "29948832",
                homePhone: "4455",
                email: "MontherS@gmail.com"
            }
        },
        medicalHistories: [
            {
                diseaseName: "Extreem headache",
                medication: "acamol",
                habits: "drinking alot of energy drinks"
            }
        ],
        Visits: [
            {
                visitDate: "22/4/2021",
                visitDiagnosis: "he need to take more rest",
                mesdicatioon: "cidamol"
            }
        ],
        chiefComplaint: " frequent headache ",
        historyOfPresentIllness: "from 3 weeks",
        physicalExamination: "no physical issues",
        assessmentAndPlan: "take the medication for the next 2 weeks after that we will do another tests",
        currentIllnessMedication: "acamol + rest",
        progressNotes: " form the last vist nothing change",
        Insurance: {
            provider: "trust",
            agent: "tamer",
            coverage: "100%",
            policyNumber: 1232223322,
            insuranceNumber: "02888777222"
        },
        id: "e5f9ae4b-3c7e-4219-ad88-7d9f0add7775"
    } 
]

export const createEphi = (req, res) => {
    const newEphi = req.body;
    ephis.push({ ...newEphi, id: uuidv4()});
    res.send("New ePHI added")
}

export const getAllEphi = (req, res) => {
    console.log(ephis);
    res.send(ephis);
}

export const getById = (req, res) => {
    const { id } = req.params;
    ephis.find(ephi => ephi.id == id);
    const ephi = ephis.find(ephi => ephi.id == id);
    res.send(ephi);
}

export const deleteEphi = (req, res) => {
    const { id } = req.params;
    ephis = ephis.filter(ephi => ephi.id != id);
    res.send(`Record with ${id} deleted successfully!`);
}

export const updateEphi = (req, res) => {
    const { id } = req.params;
    const oldEphi = ephis.find(ephi => ephi.id == id);

    const { Patient, medicalHistories, Visits, chiefComplaint,
         historyOfPresentIllness, physicalExamination, 
         assessmentAndPlan, currentIllnessMedication, progressNotes, Insurance } = req.body;

        if (Patient) oldEphi.Patient = Patient;
        if (medicalHistories) oldEphi.medicalHistories = medicalHistories;
        if (Visits) oldEphi.Visits = Visits;
        if (chiefComplaint) oldEphi.chiefComplaint;
        if (historyOfPresentIllness) oldEphi.historyOfPresentIllness = historyOfPresentIllness;
        if (physicalExamination) oldEphi.physicalExamination = physicalExamination;
        if (assessmentAndPlan) oldEphi.assessmentAndPlan = assessmentAndPlan;
        if (currentIllnessMedication) oldEphi.currentIllnessMedication = currentIllnessMedication;
        if (progressNotes) oldEphi.progressNotes = progressNotes;
        if (Insurance) oldEphi.Insurance = Insurance;

        res.send(oldEphi);
}
