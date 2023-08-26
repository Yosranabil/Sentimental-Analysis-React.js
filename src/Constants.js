
function constantData() {
    const row1Data1 = [
        { text: 'جيد', percentage: '70%', color: 'w3-green' },
        { text: 'سيئة', percentage: '20%', color: 'w3-red' },
        { text: 'باقة', percentage: '35%', color: 'w3-orange' },
        { text: 'كرت', percentage: '85%', color: 'w3-blue' },
    ];

    const row2Data1 = [
        { text: 'ماشي', percentage: '15%', color: 'w3-yellow' },
        { text: 'ايوة', percentage: '10%', color: 'w3-light-green' },
        { text: 'لا', percentage: '50%', color: 'w3-purple' },
        { text: 'مشكلة', percentage: '20%', color: 'w3-light-blue' },
    ];
    const row1Data2 = [
        { text: 'Ok', percentage: '50%', color: 'w3-green' },
        { text: 'شحن', percentage: '20%', color: 'w3-red' },
        { text: 'استعلام', percentage: '10%', color: 'w3-orange' },
        { text: 'رصيد', percentage: '90%', color: 'w3-blue' },
    ];

    const row2Data2 = [
        { text: 'شكوة', percentage: '5%', color: 'w3-yellow' },
        { text: 'انتظار', percentage: '10%', color: 'w3-light-green' },
        { text: 'لا', percentage: '60%', color: 'w3-purple' },
        { text: 'مشكلة', percentage: '30%', color: 'w3-light-blue' },
    ];

    const messageData1 = [
        {
            text: "مرحباً",
            sender: "CR",
            timestamp: "12:15"
        },
        {
            text: "مساء الخير يا فندم اقدر اساعد حضرتك في ايه",
            sender: "AG",
            timestamp: "12:30"
        },
        {
            text: "اريد الاستعلام عن الرصيد",
            sender: "CR",
            timestamp: "12:35"
        },
        {
            text: "تحت امرك",
            sender: "AG",
            timestamp: "12:44"
        },
        {
            text: "علي نفس الرقم؟",
            sender: "AG",
            timestamp: "12:45"
        },
        {
            text: "ايوة",
            sender: "CR",
            timestamp: "12:55"
        },
        {
            text: "رصيد حضرتك 20 جنيه",
            sender: "AG",
            timestamp: "1:00"
        }
    ];

    const messageData2 = [
        { text: "مرحباً", sender: "CR", timestamp: "12:15" },
        { text: "مساء الخير يا فندم اقدر اساعد حضرتك في ايه", sender: "AG", timestamp: "12:30" },
    ];

    const chart1Data = {
        options: {
            chart: {
                id: "basic-pie-1",
            },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [30, 40, 45],
    };

    const chart2Data = {
        options: {
            chart: {
                id: "basic-pie-2",
            },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [25, 50, 20],
    };

    return { row1Data1, row2Data1, row1Data2, row2Data2, messageData1, messageData2, chart1Data, chart2Data};
}

export default constantData;