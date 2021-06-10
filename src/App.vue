<template>
	<div>
    <AudioAppContainer/>
    <Tracks :tracks="tracks" />
	</div>
</template>

<script>
import AudioAppContainer from './components/AudioAppContainer.vue'
import Tracks from './components/Tracks.vue'

export default {
  name: 'App',
  data() {
    return{
      tracks: []
    }
  },
  props: {
    title: String,
  },
  components:{
    AudioAppContainer, Tracks
  },
  created() {
    this.tracks = [	
	{
        "date": "date is 14 12 20",
        "id": 1,
        "path": "4-12-20.mp3",
        "title": "title of track is 4-12-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part30_capit_lhil_insu_rectionedition_part2_1-17-21.mp3",
        "title": "theorbzone-fuck12_part30_capit_lhil_insu_rectionedition_part2_1-17-21"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part29_capit_lhil_insu_rection-parl_rshutdownedition_1-10-21.mp3",
        "title": "theorbzone-fuck12_part29_capit_lhil_insu_rection-parl_rshutdownedition_1-10-21"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part28_belatedNYE2021edition_1-3-21.mp3",
        "title": "theorbzone-fuck12_part28_belatedNYE2021edition_1-3-21"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-downtown_the15thannualwaronx-mas_part2_12-27-20.mp3",
        "title": "theorbzone-downtown_the15thannualwaronx-mas_part2_12-27-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-the15thannualwaronx-mas_pandemicedition_stayinalivept10___newtestamentpt13__12-20-20.mp3",
        "title": "theorbzone-the15thannualwaronx-mas_pandemicedition_stayinalivept10___newtestamentpt13_12-20-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part27_racisttrumptrolltrolls12aftermagamarchedition_12-13-20.mp3",
        "title": "theorbzone-fuck12_part27_racisttrumptrolltrolls12aftermagamarchedition_12-13-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part26_LIVEcoverageofPortlandICEDirectAction_12-6-20.mp3",
        "title": "theorbzone-fuck12_part26_LIVEcoverageofPortlandICEDirectAction_12-6-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-orbs_part2_moreaboutorbs_11-29-20.mp3",
        "title": "theorbzone-orbs_part2_moreaboutorbs_11-29-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-orbs11-22-20.mp3",
        "title": "theorbzone-orbs11-22-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part25_nationwidegeorgefloydprotests-riots_night1_part1post-coverage_11-15-20-20.mp3",
        "title": "theorbzone-fuck12_part25_nationwidegeorgefloydprotests-riots_night1_part1post-coverage_11-15-20-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part24_conclusionofminneapolisriotsnight2post-coverage_11-8-20.mp3",
        "title": "theorbzone-fuck12_part24_conclusionofminneapolisriotsnight2post-coverage_11-8-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part23_minneapolisriotsnight2post-coveragecontinued_11-1-20.mp3",
        "title": "theorbzone-fuck12_part23_minneapolisriotsnight2post-coveragecontinued_11-1-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part2210-25-20.mp3",
        "title": "theorbzone-fuck12_part2210-25-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part21_3rdprecinctedition_10-18-20.mp3",
        "title": "theorbzone-fuck12_part21_3rdprecinctedition_10-18-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_episode20_LakersChampionshipRiotedition_10-11-20.mp3",
        "title": "theorbzone-fuck12_episode20_LakersChampionshipRiotedition_10-11-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_episode1910-4-20.mp3",
        "title": "theorbzone-fuck12_episode1910-4-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part18_shadyfireedition_9-27-20.mp3",
        "title": "theorbzone-fuck12_part18_shadyfireedition_9-27-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part179-20-20.mp3",
        "title": "theorbzone-fuck12_part179-20-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part169-13-20.mp3",
        "title": "theorbzone-fuck12_part169-13-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part159-6-20.mp3",
        "title": "theorbzone-fuck12_part159-6-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part148-30-20.mp3",
        "title": "theorbzone-fuck12_part148-30-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part138-16-20.mp3",
        "title": "theorbzone-fuck12_part138-16-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part118-9-20.mp3",
        "title": "theorbzone-fuck12_part118-9-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part108-2-20.mp3",
        "title": "theorbzone-fuck12_part108-2-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fucc12_part97-26-20.mp3",
        "title": "theorbzone-fucc12_part97-26-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fucc12_part87-19-20.mp3",
        "title": "theorbzone-fucc12_part87-19-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part77-12-20.mp3",
        "title": "theorbzone-fuck12_part77-12-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part67-7-20.mp3",
        "title": "theorbzone-fuck12_part67-7-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part56-28-20.mp3",
        "title": "theorbzone-fuck12_part56-28-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part4_mourningmothersedition_6-21-20.mp3",
        "title": "theorbzone-fuck12_part4_mourningmothersedition_6-21-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12ONDEDNEM_fuck12_part3_6-14-20.mp3",
        "title": "theorbzone-fuck12ONDEDNEM_fuck12_part3_6-14-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck12_part26-6-20.mp3",
        "title": "theorbzone-fuck12_part26-6-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuck125-31-20.mp3",
        "title": "theorbzone-fuck125-31-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-StayInAlive_part95-24-20.mp3",
        "title": "theorbzone-#StayInAlive_part95-24-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-StayInAlive_part85-17-20.mp3",
        "title": "theorbzone-#StayInAlive_part85-17-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-StayInAlive_part75-10-20.mp3",
        "title": "theorbzone-#StayInAlive_part75-10-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-StayInAlive_part64-26-20.mp3",
        "title": "theorbzone-#StayInAlive_part64-26-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-StayInAlive_part5LIVEFROMTHEPRO-CORONAVIRUSRALLYINHARRISBURG_PENNSYLVANIA_andLIVEBREAKINGCORONAVIRUSCOVERAGE_AKAresin8orbillgates_4-26-20.mp3",
        "title": "theorbzone-#StayInAlive_part5LIVEFROMTHEPRO-CORONAVIRUSRALLYINHARRISBURG_PENNSYLVANIA_andLIVEBREAKINGCORONAVIRUSCOVERAGE_AKAresin8orbillgates_4-26-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-stayinalive_part4_pro-coronavirusprotestsedition_4-12-20.mp3",
        "title": "theorbzone-stayinalive_part4_pro-coronavirusprotestsedition_4-12-20.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-stayinalive_part34-12-20.mp3",
        "title": "theorbzone-stayinalive_part34-12-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-stayinalive_part24-5-20.mp3",
        "title": "theorbzone-stayinalive_part24-5-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-stayinalive_part13-29-20.mp3",
        "title": "theorbzone-stayinalive_part13-29-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-6ftapart_or6ftdeep3-22-20.mp3",
        "title": "theorbzone-6ftapart_or6ftdeep3-22-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-dosocialdistancingNOW3-15-20.mp3",
        "title": "theorbzone-dosocialdistancingNOW3-15-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-LIVEBREAKINGCORONAVIRUSCOVID19COVERAGE3-8-20.mp3",
        "title": "theorbzone-LIVEBREAKING#CORONAVIRUS#COVID19COVERAGE3-8-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-podcast_part33-1-20.mp3",
        "title": "theorbzone-podcast_part33-1-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-podcast_part22-23-20.mp3",
        "title": "theorbzone-podcast_part22-23-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-podcast_part12-16-20.mp3",
        "title": "theorbzone-podcast_part12-16-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-savestheuniverse_part4plusLIVEBREAKINGNEWS-WuhanCoronavirus-2-9-20.mp3",
        "title": "theorbzone-savestheuniverse_part3plusLIVEBREAKINGNEWS-#WuhanCoronavirus-1-26-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-savestheuniversepart3plusLIVEBREAKINGNEWS-WuhanCoronavirus-1-26-20.mp3",
        "title": "theorbzone-savestheuniverse_part3plusLIVEBREAKINGNEWS-#WuhanCoronavirus-1-26-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-savestheuniverse_part21-19-20.mp3",
        "title": "theorbzone-savestheuniverse_part21-19-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-savestheuniverse_part11-12-20.mp3",
        "title": "theorbzone-savestheuniverse_part11-12-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-thefuneral1-5-20.mp3",
        "title": "theorbzone-thefuneral1-5-20"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-unknown45party12-29-19.mp3",
        "title": "theorbzone-unknown45party12-29-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-the14thannualwaronx-mas_newtestamentpart12_12-22-19.mp3",
        "title": "theorbzone-the14thannualwaronx-mas_newtestamentpart12_12-22-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-tworonsdontmakeariteaid12-15-19.mp3",
        "title": "theorbzone-tworonsdon_tmakeariteaid12-15-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-thedigitaldangerzone12-8-19.mp3",
        "title": "theorbzone-the_digital_dangerzone12-8-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-LRAD12-1-19.mp3",
        "title": "theorbzone-LRAD12-1-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-someorbzone_part2411-24-19.mp3",
        "title": "theorbzone-someorbzone_part2411-24-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-americabyrail11-17-19.mp3",
        "title": "theorbzone-americabyrail11-17-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-wolves11-10-19.mp3",
        "title": "theorbzone-wolves11-10-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-imbelleruthnaparstekthejanitorsgotaheadache10-20-19.mp3",
        "title": "theorbzone-i_mbelleruthnaparstek_thejanitor_sgotaheadache_10-20-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-iphoneinyourdome10-13-19.mp3",
        "title": "theorbzone-iphoneinyourdome10-13-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantotherpart3710-6-19.mp3",
        "title": "theorbzone-significantother_part3710-6-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-wokeylandgoestothemoon9-29-19.mp3",
        "title": "theorbzone-wokeylandgoestothemoon9-29-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-theycantstopallofus9-22-19.mp3",
        "title": "theorbzone-theycan_tstopallofus9-22-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-godsurgery9-8-19.mp3",
        "title": "theorbzone-godsurgery9-8-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-bandpractice9-1-19.mp3",
        "title": "theorbzone-bandpractice9-1-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-bernieblowout8-25-19.mp3",
        "title": "theorbzone-bernieblowout8-25-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-lurchthenazi8-18-19.mp3",
        "title": "theorbzone-lurchthenazi8-18-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-IMPORTANTLEGALNOTICE8-11-19.mp3",
        "title": "theorbzone-IMPORTANTLEGALNOTICE8-11-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-gettininshapepart3_fishemulsion_8-4-19.mp3",
        "title": "theorbzone-gettin_inshapepart3_fishemulsion_8-4-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-gettininshapepart2_sweatmountain_7-28-19.mp3",
        "title": "theorbzone-gettin_inshapepart2_sweatmountain_7-28-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-gettininshape_crutches_7-21-4-19.mp3",
        "title": "theorbzone-gettin_inshape_crutches_7-21-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part367-14-19.mp3",
        "title": "theorbzone-significantother_part367-14-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-hivicky7-7-19.mp3",
        "title": "theorbzone-hivicky7-7-19"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-whut-questionmark-6-30-19.mp3",
        "title": "theorbzone-whut?6-30-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-ottersday6-16-19.mp3",
        "title": "theorbzone-otter_sday6-16-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part354-28-19.mp3",
        "title": "theorbzone-significantother_part354-28-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-newtestament_part164-21-19.mp3",
        "title": "theorbzone-newtestament_part164-21-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part344-14-19.mp3",
        "title": "theorbzone-significantother_part344-14-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part334-7-19.mp3",
        "title": "theorbzone-significantother_part334-7-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part323-24-19.mp3",
        "title": "theorbzone-significantother_part323-24-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-someorbzone_part233-17-19.mp3",
        "title": "theorbzone-someorbzone_part233-17-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-atomsphericriver_newdumptape_etc.3-10-19.mp3",
        "title": "theorbzone-atmosphericriver_newdumptape_etc.3-10-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part312-24-19.mp3",
        "title": "theorbzone-significantother_part312-24-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part302-17-19.mp3",
        "title": "theorbzone-significantother_part302-17-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part292-10-19.mp3",
        "title": "theorbzone-significantother_part292-10-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part282-3-19.mp3",
        "title": "theorbzone-significantother_part282-3-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part271-27-19.mp3",
        "title": "theorbzone-significantother_part271-27-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part26.mp3",
        "title": "theorbzone-significantother_part261-6-19.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part25_post-x-masbluesedition_12-30-18.mp3",
        "title": "theorbzone-significantother_part25_post-x-masbluesedition_12-30-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-the13thannualwaronx-mas_newtestament_part11_12-23-18.mp3",
        "title": "theorbzone-the13thannualwaronx-mas_newtestament_part11_12-23-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part2412-16-18.mp3",
        "title": "theorbzone-significantother_part2412-16-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part2312-9-18.mp3",
        "title": "theorbzone-significantother_part2312-9-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part2212-2-18.mp3",
        "title": "theorbzone-significantother_part2212-2-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part2111-25-18.mp3",
        "title": "theorbzone-significantother_part2111-25-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-RELAAAAAX11-11-18.mp3",
        "title": "theorbzone-RELAAAAAX11-11-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-guidetothecaliforniamidtermelectsion201811-4-18.mp3",
        "title": "theorbzone-guidetothecaliforniamidtermelectsion201811-4-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part2010-28-18.mp3",
        "title": "theorbzone-significantother_part2010-28-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part1910-21-18.mp3",
        "title": "theorbzone-significantother_part1910-21-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part1910-21-18.mp3",
        "title": "theorbzone-significantother_part1910-21-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part1810-14-18.mp3",
        "title": "theorbzone-significantother_part1810-14-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part1710-07-18.mp3",
        "title": "theorbzone-significantother_part1710-07-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part16_telephoneedition_9-30-18.mp3",
        "title": "theorbzone-significantother_part16_telephoneedition_9-30-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part159-23-18.mp3",
        "title": "theorbzone-significantother_part159-23-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part149-16-18.mp3",
        "title": "theorbzone-significantother_part149-16-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part13_SOUNDSOFHELLedition_part3_9-9-18.mp3",
        "title": "theorbzone-significantother_part13_SOUNDSOFHELLedition_part3_9-9-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part12_SOUNDSOFHELLedition_part2_9-2-18.mp3",
        "title": "theorbzone-significantother_part12_SOUNDSOFHELLedition_part2_9-2-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part11_SOUNDSOFHELLedition_8-26-18.mp3",
        "title": "theorbzone-significantother_part11_SOUNDSOFHELLedition_8-26-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part10_dreamsedition_part2_8-19-18.mp3",
        "title": "theorbzone-significantother_part10_dreamsedition_part2_8-19-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part98-12-18.mp3",
        "title": "theorbzone-significantother_part98-12-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part88-5-18.mp3",
        "title": "theorbzone-significantother_part88-5-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part77-29-18.mp3",
        "title": "theorbzone-significantother_part77-29-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part6_dreamsedition_6-4-18.mp3",
        "title": "theorbzone-significantother_part6_dreamsedition_6-4-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part5_airportedition_4-22-18.mp3",
        "title": "theorbzone-significantother_part5_airportedition_4-22-18.mp3"
    }
	,
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part44-15-18.mp3",
        "title": "theorbzone-significantother_part44-15-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part34-8-18.mp3",
        "title": "theorbzone-significantother_part34-8-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part24-1-18.mp3",
        "title": "theorbzone-significantother_part24-1-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-significantother_part13-25-18.mp3",
        "title": "theorbzone-significantother_part13-25-18.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-fuckthegodofwar6-25-17.mp3",
        "title": "theorbzone-fuckthegodofwar6-25-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-ACwaste6-18-17.mp3",
        "title": "theorbzone-ACwaste6-18-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-resin8sbitcoinbreakdown6-11-17.mp3",
        "title": "theorbzone-resin8_sbitcoinbreakdown6-11-17"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-aaaaaaaa6-4-17.mp3",
        "title": "theorbzone-aaaaaaaa_6-4-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-heavenisforkidspart10_newtestamentpart14_5-28-17.mp3",
        "title": "theorbzone-heavenisforkids_part10_newtestament_part14_5-28-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-heavenisforkidspart9_newtestamentpart13_5-21-17.mp3",
        "title": "theorbzone-heavenisforkids_part9_newtestament_part13_5-21-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-heavenisforkidspart8_newtestamentpart12_5-14-17.mp3",
        "title": "theorbzone-heavenisforkids_part8_newtestament_part12_5-14-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart205-7-17.mp3",
        "title": "theorbzone-howtomusic_part205-7-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart194-30-17.mp3",
        "title": "theorbzone-howtomusic_part194-30-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart184-23-17.mp3",
        "title": "theorbzone-howtomusic_part184-23-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-newtestamentpart114-16-17.mp3",
        "title": "theorbzone-newtestament_part114-16-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart174-9-17.mp3",
        "title": "theorbzone-howtomusic_part174-9-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart164-2-17.mp3",
        "title": "theorbzone-howtomusic_part164-2-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart153-26-17.mp3",
        "title": "theorbzone-howtomusic_part153-26-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart143-19-17.mp3",
        "title": "theorbzone-howtomusic_part143-19-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart133-12-17.mp3",
        "title": "theorbzone-howtomusic_part133-12-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart123-5-17.mp3",
        "title": "theorbzone-howtomusic_part123-5-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart112-26-17.mp3",
        "title": "theorbzone-howtomusic_part112-26-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart102-19-17.mp3",
        "title": "theorbzone-howtomusic_part102-19-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart92-5-17.mp3",
        "title": "theorbzone-howtomusic_part92-5-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart81-29-17.mp3",
        "title": "theorbzone-howtomusic_part81-29-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart71-23-17.mp3",
        "title": "theorbzone-howtomusic_part71-23-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart61-15-17.mp3",
        "title": "theorbzone-howtomusic_part61-15-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart51-8-17.mp3",
        "title": "theorbzone-howtomusic_part51-8-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-howtomusicpart41-1-17.mp3",
        "title": "theorbzone-howtomusic_part41-1-17.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-the12thannualwaronx-mas_newtestamentpart10_12-25-16.mp3",
        "title": "theorbzone-the12thannualwaronx-mas_newtestamentpart10_12-25-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-chicovs.santarosa12-19-16.mp3",
        "title": "theorbzone-chicovs.santarosa12-19-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-omahasteaks12-11-16.mp3",
        "title": "theorbzone-omahasteaks12-11-16"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-ronaldmcdonaldtrump12-4-16.mp3",
        "title": "theorbzone-ronaldmcdonaldtrump12-4-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-gotokratomcomments.organdmakeacommentbeforedecember1st11-27-16.mp3",
        "title": "theorbzone-gotokratomcomments.organdmakeacommentbeforedecember1st11-27-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-leonardtrump11-13-16.mp3",
        "title": "theorbzone-leonardtrump11-13-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-comprehensiveguidetocaliforniasballotpropostions201611-6-16.mp3",
        "title": "theorbzone-comprehensiveguidetocalifornia_sballotpropostions201611-6-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-scaryshit10-30-16.mp3",
        "title": "theorbzone-scaryshit10-30-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-randomrants_bonezoneedition_10-23-16.mp3",
        "title": "theorbzone-randomrants_bonezoneedition_10-23-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-schedule1part6grabembythepussypart2coochieedition10-16-16.mp3",
        "title": "theorbzone-schedule1_part6_grab_embythepussy_part2_coochieedition_10-16-16"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-grabembythepussy10-9-16.mp3",
        "title": "theorbzone-grab_embythepussy10-9-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-schedule1part510-2-16.mp3",
        "title": "theorbzone-schedule1_part510-2-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-schedule1part49-25-16.mp3",
        "title": "theorbzone-schedule1_part49-25-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-shedule1part39-18-16.mp3",
        "title": "theorbzone-shedule1_part39-18-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-schedule1part29-11-16.mp3",
        "title": "theorbzone-schedule1_part29-11-16"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-schedule18-4-16.mp3",
        "title": "theorbzone-schedule18-4-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-environmentalcontrol-avoidingallergenexposure8-28-16.mp3",
        "title": "theorbzone-environmentalcontrol-avoidingallergenexposure8-28-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-impersonaltrainer8-21-16.mp3",
        "title": "theorbzone-impersonaltrainer8-21-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-ASMR8-15-16.mp3",
        "title": "theorbzone-ASMR8-15-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-karaokedokie8-7-16.mp3",
        "title": "theorbzone-karaokedokie8-7-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-jewlunation7-31-16.mp3",
        "title": "theorbzone-jewlunation7-31-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-radiophonic7-24-16.mp3",
        "title": "theorbzone-radiophonic7-24-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-mindsetpreparation7-17-16.mp3",
        "title": "theorbzone-mindsetpreparation7-17-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-sonomacountyfair7-10-16.mp3",
        "title": "theorbzone-sonomacountyfair7-10-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-starchild7-3-16.mp3",
        "title": "theorbzone-starchild7-3-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-couchsitting6-26-16.mp3",
        "title": "theorbzone-couchsitting6-26-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-thecowsmeditation6-19-16.mp3",
        "title": "theorbzone-thecow_smeditation6-19-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-truckerpassions6-12-16.mp3",
        "title": "theorbzone-truckerpassions6-12-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-leg-humpersanonymous6-5-16.mp3",
        "title": "theorbzone-leg-humpersanonymous6-5-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-stevestokesforpresidentcristinagrappo5-29-16.mp3",
        "title": "theorbzone-stevestokesforpresidentcristinagrappo5-29-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone5-22-16.mp3",
        "title": "theorbzone-làtrongvòmcủabạn5-22-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-happymotherday5-8-16.mp3",
        "title": "theorbzone-happymother_sday_5-8-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-victoriaredstallsavestheday5-1-16.mp3",
        "title": "theorbzone-victoriaredstallsavestheday5-1-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-princesucked4-24-16.mp3",
        "title": "theorbzone-princesucked4-24-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-pupusaparty4-19-16.mp3",
        "title": "theorbzone-pupusaparty4-19-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-oxymoronicdichotomy_frankandfurterintheafternoon_4-10-16.mp3",
        "title": "theorbzone-oxymoronicdichotomy_frankandfurterintheafternoon_4-10-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-someorbzonepart224-3-16.mp3",
        "title": "theorbzone-someorbzonepart224-3-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-citizenshiptest3-27-16.mp3",
        "title": "theorbzone-citizenshiptest3-27-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-livefrommilwaukee_CA3-20-16.mp3",
        "title": "theorbzone-livefrommilwaukee_CA3-20-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-someorbzonepart213-6-16.mp3",
        "title": "theorbzone-someorbzonepart213-6-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-theREALbrozone2-28-16.mp3",
        "title": "theorbzone-theREALbrozone2-28-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-AIMHIGH_TipsforTeenspart2_bonusTipsforAdultsedition_2-14-16.mp3",
        "title": "theorbzone-AIMHIGH_TipsforTeenspart2_bonusTipsforAdultsedition_2-14-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theorbzone-AIMHIGH_TipsforTeenspart12-14-16.mp3",
        "title": "theorbzone-AIMHIGH_TipsforTeenspart12-14-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "theenozorb-oldguysaloneandfriends2-7-16.mp3",
        "title": "theenozorb-oldguysaloneandfriends2-7-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-realtalk1-31-16.mp3",
        "title": "thebrozone-realtalk1-31-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-deadair1-24-16.mp3",
        "title": "thebrozone-deadair1-24-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part9_the8thsequel1-18-15.mp3",
        "title": "thebrozone-ghosbustin_part9_the8thsequel1-18-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part8the7thsequel1-10-16.mp3",
        "title": "thebrozone-ghosbustin_part8the7thsequel1-10-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part7the6thsequel1-3-16.mp3",
        "title": "thebrozone-ghosbustin_part7the6thsequel1-3-16.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part6the5thsequel12-27-15.mp3",
        "title": "thebrozone-ghosbustin_part6the5thsequel12-27-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the11thannualwaronx-mas_newtestamentpart9_12-20-15.mp3",
        "title": "thebrozone-the11thannualwaronx-mas_newtestamentpart9_12-20-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part5_the4thsequel12-13-15.mp3",
        "title": "thebrozone-ghosbustin_part5_the4thsequel12-13-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustin_part4_the3rdsequel12-6-15.mp3",
        "title": "thebrozone-ghosbustin_part4_the3rdsequel12-6-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thanksgivingleftoversreloaded11-29-15.mp3",
        "title": "thebrozone-thanksgivingleftoversreloaded11-29-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustinpart3thesecondsequel11-22-15.mp3",
        "title": "thebrozone-ghosbustin_part3_thesecondsequel11-22-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustinpart2thesequel11-15-15.mp3",
        "title": "thebrozone-ghosbustin_part2_thesequel11-15-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ghosbustinpart111-8-15.mp3",
        "title": "thebrozone-ghosbustin_part111-8-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-shreddingthegnar11-1-15.mp3",
        "title": "thebrozone-shreddingthegnar11-1-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bingo10-25-15.mp3",
        "title": "thebrozone-bingo10-25-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-deadpeopleandrealestateagents10-18-15.mp3",
        "title": "thebrozone-deadpeopleandrealestateagents10-18-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-pair-o-keets10-11-15.mp3",
        "title": "thebrozone-pair-o-keets10-11-15.mp3"
    }
	,
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-donaldtrumppinata9-27-15.mp3",
        "title": "thebrozone-donaldtrumppinata9-27-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart209-20-15.mp3",
        "title": "thebrozone-somebrozonepart209-20-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fire9-13-15.mp3",
        "title": "thebrozone-fire9-13-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol128-30-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol128-30-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol118-23-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol118-23-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol10_hotasfuckedition_8-16-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol10_hotasfuckedition_8-16-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKRANKYSHITvol98-9-15.mp3",
        "title": "thebrozone-UNRELEASEDKKRANKYSHITvol98-9-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol88-2-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol88-2-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol77-26-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol77-26-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol66-12-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol67-12-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKKKRANKYSHITvol57-5-15.mp3",
        "title": "thebrozone-UNRELEASEDKKKRANKYSHITvol57-5-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKRANKYSHITvol46-21-15.mp3",
        "title": "thebrozone-UNRELEASEDKRANKYSHITvol46-21-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-brornettecoleman6-14-15.mp3",
        "title": "thebrozone-brornettecoleman6-14-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKRANKYSHITvol36-7-15.mp3",
        "title": "thebrozone-UNRELEASEDKRANKYSHITvol36-7-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDkrankyshitvol25-31-15.mp3",
        "title": "thebrozone-UNRELEASEDKRANKYSHITvol25-31-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-UNRELEASEDKRANKYSHIT5-24-15.mp3",
        "title": "thebrozone-UNRELEASEDKRANKYSHIT5-24-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-untilimdeadandcold5-17-15.mp3",
        "title": "thebrozone-untili_mdeadandcold5-17-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart195-10-15.mp3",
        "title": "thebrozone-somebrozonepart195-10-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart185-3-15.mp3",
        "title": "thebrozone-somebrozonepart185-3-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart174-26-15.mp3",
        "title": "thebrozone-somebrozonepart174-26-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonept163-19-15.mp3",
        "title": "thebrozone-somebrozonept163-19-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart8_easteredition_3-5-15.mp3",
        "title": "thebrozone-newtestamentpart8_easteredition_3-5-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mattcarrillbro3-29-15.mp3",
        "title": "thebrozone-mattcarrillbro3-29-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thesink3-22-15.mp3",
        "title": "thebrozone-thesink3-22-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ibelieveso3-15-15.mp3",
        "title": "thebrozone-ibelieveso3-15-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-brocosby3-8-15.mp3",
        "title": "thebrozone-brocosby3-8-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sperminalpinkeye3-1-15.mp3",
        "title": "thebrozone-sperminalpinkeye3-1-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-pinkeyedrivingtest2-22-15.mp3",
        "title": "thebrozone-pinkeyedrivingtest2-22-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-resin8s40thbirthdaycountdownspectacular2-15-15.mp3",
        "title": "thebrozone-resin8s40thbirthdaycountdownspectacular2-15-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart152-8-15.mp3",
        "title": "thebrozone-somebrozonepart152-8-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart72-1-15.mp3",
        "title": "thebrozone-newtestamentpart72-1-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart61-25-15.mp3",
        "title": "thebrozone-newtestamentpart61-25-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart51-18-15.mp3",
        "title": "thebrozone-newtestamentpart51-18-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart41-11-15.mp3",
        "title": "thebrozone-newtestamentpart41-11-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart31-4-15.mp3",
        "title": "thebrozone-newtestamentpart31-4-15.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newtestamentpart212-28-14.mp3",
        "title": "thebrozone-newtestamentpart212-28-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the10thannualwaronx-mas_newtestamentpart1_12-21-14.mp3",
        "title": "thebrozone-the10thannualwaronx-mas_newtestamentpart1_12-21-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-40thanniversarysuperall-starsoundspecialspectacular12-14-14.mp3",
        "title": "thebrozone-40thanniversarysuperall-starsoundspecialspectacular12-14-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-djgumdropsessionsinthemix12-7-14.mp3",
        "title": "thebrozone-djgumdropsessionsinthemix12-7-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart14_11-30-14_.mp3",
        "title": "thebrozone-somebrozonepart14_11-30-14_.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart1311-23-14.mp3",
        "title": "thebrozone-somebrozonepart1311-23-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-loveistheonlygoal11-16-14.mp3",
        "title": "thebrozone-loveistheonlygoal11-16-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thebrozoneisforthebirdspart311-9-14.mp3",
        "title": "thebrozone-thebrozoneisforthebirdspart311-9-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thebrozoneisforthebirdspart211-3-14.mp3",
        "title": "thebrozone-thebrozoneisforthebirdspart211-3-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thebrozoneisforthebirds_part1_backyardbirdsong_10-26-14.mp3",
        "title": "thebrozone-thebrozoneisforthebirds_part1_backyardbirdsong_10-26-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sateliteproblemspart210-19-14",
        "title": "tthebrozone-satelliteproblemspart210-19-14"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart1210-12-14.mp3",
        "title": "thebrozone-somebrozonepart1210-12-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ebrola10-05-14.mp3",
        "title": "thebrozone-ebrola10-05-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "test1.mp3",
        "title": "thebrozone-thebrozoneisinformersanfranciscogiantspitchermikelacoss_sdome9-21-14"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-djzztopinthemix9-14-14.mp3",
        "title": "thebrozone-djzztopinthemix9-14-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thebrozoneisinthetwilightzone_sdome9-7-14.mp3",
        "title": "thebrozone-thebrozoneisinthetwilightzone_sdome9-7-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart118-31-14.mp3",
        "title": "thebrozone-somebrozonepart118-31-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-chevyfordskin8-24-14.mp3",
        "title": "thebrozone-chevyfordskin8-24-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-cloaca8-17-14.mp3",
        "title": "thebrozone-cloaca8-17-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-comparisonsofrestorativedentalmaterials8-10-14.mp3",
        "title": "thebrozone-comparisonsofrestorativedentalmaterials8-10-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-comparisonsofrestorativedentalmaterials8-10-14.mp3",
        "title": "thebrozone-comparisonsofrestorativedentalmaterials8-10-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-gettin_offintheshower8-3-14.mp3",
        "title": "thebrozone-gettin_offintheshower8-3-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-smartandfinal7-27-14.mp3",
        "title": "thebrozone-smartandfinal7-27-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-electricyouth7-20-14.mp3",
        "title": "thebrozone-electricyouth7-20-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-kcufradio7-13-14.mp3",
        "title": "thebrozone-kcufradio7-13-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thewayofthesuperiorman_part5_yourdarkside_7-6-14.mp3",
        "title": "thebrozone-thewayofthesuperiorman_part5_yourdarkside_7-6-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thewayofthesuperiorman_part4_whatwomenreallywant_6-29-14.mp3",
        "title": "thebrozone-thewayofthesuperiorman_part4_whatwomenreallywant_6-29-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thewayofthesuperiorman_part36-22-14.mp3",
        "title": "thebrozone-thewayofthesuperiorman_part36-22-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thewayofthesuperiorman_part26-15-14.mp3",
        "title": "thebrozone-thewayofthesuperiorman_part26-15-14.mp3"
    }
	,
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thewayofthesuperiorman6-8-14.mp3",
        "title": "thebrozone-thewayofthesuperiorman6-8-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart76-1-14.mp3",
        "title": "thebrozone-heavenisforkidspart76-1-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart65-25-14.mp3",
        "title": "thebrozone-heavenisforkidspart65-25-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart55-18-14.mp3",
        "title": "thebrozone-heavenisforkidspart55-18-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart45-11-14.mp3",
        "title": "thebrozone-heavenisforkidspart45-11-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart35-04-14.mp3",
        "title": "thebrozone-heavenisforkidspart35-04-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkidspart24-27-14.mp3",
        "title": "thebrozone-heavenisforkidspart24-27-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-guidetobetterpeoplemanagementpart2_420easteredition_.mp3",
        "title": "thebrozone-guidetobetterpeoplemanagementpart2_420easteredition_.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-guidetobetterpeoplemanagementpart14-13-14.mp3",
        "title": "thebrozone-guidetobetterpeoplemanagementpart14-13-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-telephoneinformationsystem4-6-14.mp3",
        "title": "thebrozone-telephoneinformationsystem4-6-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart103-30-14.mp3",
        "title": "thebrozone-somebrozonepart103-30-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-noquestions_please3-23-14.mp3",
        "title": "thebrozone-noquestions_please3-23-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bossdossinthehouse_3-16-14.mp3",
        "title": "thebrozone-bossdossinthehouse_3-16-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-superblue-greendatamoshedalgae3-9-14.mp3",
        "title": "thebrozone-superblue-greendatamoshedalgae3-9-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-superblue-greenalgae3-2-14.mp3",
        "title": "thebrozone-superblue-greenalgae3-2-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart92-23-14.mp3",
        "title": "thebrozone-somebrozonepart92-23-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-blueskies2-16-14.mp3",
        "title": "thebrozone-blueskies2-16-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-settingupforthebrozone2-9-14.mp3",
        "title": "thebrozone-settingupforthebrozone2-9-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart82-2-14.mp3",
        "title": "thebrozone-somebrozonepart82-2-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-burningtoken1-26-14.mp3",
        "title": "thebrozone-burningtoken1-26-14.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-stonypointbroed1-19-13.mp3",
        "title": "thebrozone-stonypointbroed1-19-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-gnomesayin_1-12-13.mp3",
        "title": "thebrozone-gnomesayin_1-12-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-toastedbreadsoftheworld1-05-13.mp3",
        "title": "thebrozone-toastedbreadsoftheworld1-05-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-elliseinstein12-29-13.mp3",
        "title": "thebrozone-elliseinstein12-29-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the9thannualwaronx-mas12-22-13.mp3",
        "title": "thebrozone-the9thannualwaronx-mas12-22-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sleep12-15-13.mp3",
        "title": "thebrozone-sleep12-15-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-brobesity_anationalproblem12-08-13.mp3",
        "title": "thebrozone-brobesity_anationalproblem12-08-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thanksgivingleftovers12-01-13.mp3",
        "title": "thebrozone-thanksgivingleftovers12-01-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bikeodin11-24-13.mp3",
        "title": "thebrozone-bikeodin11-24-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-lunkalarm3.011-17-13.mp3",
        "title": "thebrozone-lunkalarm3.011-17-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thebrozoneisinyouroldfolk_shome11-10-13.mp3",
        "title": "thebrozone-thebrozoneisinyouroldfolk_shome11-10-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart711-04-13.mp3",
        "title": "thebrozone-somebrozonepart711-04-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-takeawalkonthebroedside10-27-13.mp3",
        "title": "thebrozone-takeawalkonthebroedside10-27-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-traditionalchineseaudiotorturevol.210-13-13.mp3",
        "title": "thebrozone-traditionalchineseaudiotorturevol.210-13-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-traditionalchineseaudiotorture10-6-13.mp3",
        "title": "thebrozone-traditionalchineseaudiotorture10-6-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thetatlervsthedisneyinstitute9-29-13.mp3",
        "title": "thebrozone-thetatlervsthedisneyinstitute9-29-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-brotoshopwarz9-22-13.mp3",
        "title": "thebrozone-brotoshopwarz9-22-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-plumbingproblemsinyourdome9-15-13.mp3",
        "title": "thebrozone-plumbingproblemsinyourdome9-15-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-gayblackjewishklansmenfortoleranceandunderstanding9-08-13.mp3",
        "title": "thebrozone-gayblackjewishklansmenfortoleranceandunderstanding9-08-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mydick9-1-13.mp3",
        "title": "thebrozone-mydick9-1-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-saltonseawaste8-25-13.mp3",
        "title": "thebrozone-saltonseawaste8-25-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart48-18-13.mp3",
        "title": "thebrozone-somebrozonepart48-18-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ican_tbelieveit_sbeen40years_8-11-13.mp3",
        "title": "thebrozone-ican_tbelieveit_sbeen40years_8-11-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart38-4-13.mp3",
        "title": "thebrozone-somebrozonepart38-4-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bro2.07-28-13.mp3",
        "title": "thebrozone-bro2.07-28-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-unicornrape7-21-13.mp3",
        "title": "thebrozone-unicornrape7-21-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-organtrail7-14-13.mp3",
        "title": "thebrozone-organtrail7-14-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-daggeringonthetrow7-07-13.mp3",
        "title": "thebrozone-daggeringonthetrow7-07-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-ican_tbelieveit_sbeen20years_6-30-13.mp3",
        "title": "thebrozone-ican_tbelieveit_sbeen20years_6-30-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-auto-tunethebrozone6-23-13.mp3",
        "title": "thebrozone-auto-tunethebrozone6-23-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fatherday6-16-13.mp3",
        "title": "thebrozone-fatherday6-16-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-hasselhoffin_6-9-13.mp3",
        "title": "thebrozone-hasselhoffin_6-9-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-whatittakestobenumbeone6-02-13.mp3",
        "title": "thebrozone-whatittakestobenumbeone6-02-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-milkandpepsi5-26-13.mp3",
        "title": "thebrozone-milkandpepsi5-26-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart25-19-13.mp3",
        "title": "thebrozone-somebrozonepart25-19-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-autopilotsafety5-12-13.mp3",
        "title": "thebrozone-autopilotsafety5-12-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-broedtransport5-5-13.mp3",
        "title": "thebrozone-broedtransport5-5-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-television-vcrcombination4-28-13.mp3",
        "title": "thebrozone-television/vcrcombination4-28-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bridgeoverbroedoutwater4-21-13.mp3",
        "title": "thebrozone-bridgeoverbroedoutwater4-21-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-attackofthekillermushrooms4-14-13.mp3",
        "title": "thebrozone-attackofthekillermushrooms4-14-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-somebrozonepart14-7-13.mp3",
        "title": "thebrozone-somebrozonepart14-7-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-jesusbunnycelebration3-31-13.mp3",
        "title": "thebrozone-jesusbunnycelebration3-31-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mr.fresh_sfreestylerapbattleroyale20133-24-13.mp3",
        "title": "thebrozone-mr.fresh_sfreestylerapbattleroyale20133-24-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoplaymuzak3-17-13.mp3",
        "title": "thebrozone-howtoplaymuzak3-17-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoplaymusicpart33-10-13.mp3",
        "title": "thebrozone-howtoplaymusicpart33-10-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoplaymusicpart23-03-13.mp3",
        "title": "thebrozone-howtoplaymusicpart23-03-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoplaymusic2-24-13.mp3",
        "title": "thebrozone-howtoplaymusic2-24-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoremembereverythinginyourpastpart2vs.memorymakesmillionaires2-17-13.mp3",
        "title": "thebrozone-howtoremembereverythinginyourpastpart2vs.memorymakesmillionaires2-17-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoremembereverythinginyourpast2-10-13.mp3",
        "title": "thebrozone-howtoremembereverythinginyourpast2-10-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoremembernumbers2-04-13.mp3",
        "title": "thebrozone-howtoremembernumbers2-04-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtorememberajoke1-27-13.mp3",
        "title": "thebrozone-howtorememberajoke1-27-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtorememberalist1-20-13.mp3",
        "title": "thebrozone-howtorememberalist1-20-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtoremembernames1-13-13.mp3",
        "title": "thebrozone-howtoremembernames1-13-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-introductiontomemoryimprovement1-6-13.mp3",
        "title": "thebrozone-introductiontomemoryimprovement1-6-13.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-year-endvagholesatandogdischarge12-30-12.mp3",
        "title": "thebrozone-year-endvagholesatandogdischarge12-30-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the8thannualwaronx-mas12-23-12.mp3",
        "title": "thebrozone-the8thannualwaronx-mas12-23-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-theendzone12-16-12.mp3",
        "title": "thebrozone-theendzone12-16-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-youmusttapyourballsackintheass12-09-12.mp3",
        "title": "thebrozone-youmusttapyourballsackintheass12-09-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-tanukilasagne12-03-12.mp3",
        "title": "thebrozone-tanukilasagne12-03-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-rebeccablackfriday11-25-12.mp3",
        "title": "thebrozone-rebeccablackfriday11-25-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-BURS_pt211-18-12.mp3",
        "title": "thebrozone-BURS_pt211-18-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-crapcircles11-11-12.mp3",
        "title": "thebrozone-crapcircles11-11-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-cassetterape11-04-12.mp3",
        "title": "thebrozone-cassetterape11-04-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-morerecipesfordisaster10-28-12.mp3",
        "title": "thebrozone-morerecipesfordisaster10-28-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-recipesfordisaster10-21-12.mp3",
        "title": "thebrozone-recipesfordisaster10-21-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-everyoneintexashasAIDS10-14-12.mp3",
        "title": "thebrozone-everyoneintexashasAIDS10-14-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-broceryshopping10-07-12.mp3",
        "title": "thebrozone-broceryshopping10-07-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bestworstpartyever9-30-12.mp3",
        "title": "thebrozone-bestworstpartyever9-30-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-spacecowboypizzadust9-23-12.mp3",
        "title": "thebrozone-spacecowboypizzadust9-23-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-burs9-16-12.mp3",
        "title": "thebrozone-burs9-16-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fastingforthebrozone9-9-12.mp3",
        "title": "thebrozone-fastingforthebrozone9-9-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-worstrecordingsessionever9-2-12.mp3",
        "title": "thebrozone-worstrecordingsessionever9-2-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-solderingirony8-26-12.mp3",
        "title": "thebrozone-solderingirony8-26-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-webuiltthiscity8-19-12.mp3",
        "title": "thebrozone-webuiltthiscity8-19-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fixin_theheadphones8-12-12.mp3",
        "title": "thebrozone-fixin_theheadphones8-12-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sorryifyoumissedoutonthe_za8-5-12.mp3",
        "title": "thebrozone-sorryifyoumissedoutonthe_za8-5-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-instantlearning7-29-12.mp3",
        "title": "thebrozone-instantlearning7-29-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-electricalpart27-22-12.mp3",
        "title": "thebrozone-electricalpart27-22-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-electrical7-15-12.mp3",
        "title": "thebrozone-electrical7-15-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "the_brozone-_health_and_safety__7-9-12.mp3",
        "title": "thebrozone-healthandsafety7-9-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mathreview7-1-12.mp3",
        "title": "thebrozone-mathreview7-1-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-businessmanagement6-24-12.mp3",
        "title": "thebrozone-businessmanagement6-24-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-harnessingthepowerofthezoneforpeakperformance.mp3",
        "title": "thebrozone-harnessingthepowerofthezoneforpeakperformance.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-laborcode6-10-12.mp3",
        "title": "thebrozone-laborcode6-10-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mechanics_lienlaw6-3-12.mp3",
        "title": "thebrozone-mechanics_lienlaw6-3-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-contractor_slicenselaw5-27-12.mp3",
        "title": "thebrozone-contractor_slicenselaw5-27-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sonicconsciousness5-20-12.mp3",
        "title": "thebrozone-sonicconsciousness5-20-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mothbirth_sday5-13-12.mp3",
        "title": "thebrozone-mothbirth_sday5-13-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-traderbro_s5-6-12.mp3",
        "title": "thebrozone-traderbro_s5-6-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-foosparadise4-29-12.mp3",
        "title": "thebrozone-foosparadise4-29-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-chiefmouthbroshut4-22-12.mp3",
        "title": "thebrozone-chiefmouthbroshut4-22-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-alltimelowallthetime4-15-12.mp3",
        "title": "thebrozone-alltimelowallthetime4-15-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-alligatorshoes4-8-12.mp3",
        "title": "thebrozone-alligatorshoes4-8-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-findingoldfriends4-01-12.mp3",
        "title": "thebrozone-findingoldfriends4-01-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-findingajob3-25-12.mp3",
        "title": "thebrozone-findingajob3-25-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-landlordyourgaragesaleandgoogleyourgenealogywithyourradioactivecellphone3-18-12.mp3",
        "title": "thebrozone-landlordyourgaragesaleandgoogleyourgenealogywithyourradioactivecellphone3-18-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-at_tistheworstcompanyofalltime3-11-12.mp3",
        "title": "thebrozone-at_tistheworstcompanyofalltime3-11-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-movin_on3-4-12.mp3",
        "title": "thebrozone-movin_on3-4-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-hihoelectricbro_away_2-26-12.mp3",
        "title": "thebrozone-hihoelectricbro_away_2-26-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-howtobeabetterbrogrammer2-19-12.mp3",
        "title": "thebrozone-howtobeabetterbrogrammer2-19-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-smokin_thepipeline2-12-12.mp3",
        "title": "thebrozone-smokin_thepipeline2-12-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-scrubbingscentedvaginabubbles2-05-12.mp3",
        "title": "thebrozone-scrubbingscentedvaginabubbles2-05-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fuckyou1-29-12.mp3",
        "title": "thebrozone-fuckyou1-29-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-sopa-pipa_istheinternetblackenoughforyoupart2_1-22-12.mp3",
        "title": "thebrozone-sopa-pipa_istheinternetblackenoughforyoupart2_1-22-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-istheinternetblackenoughforyou1-15-12.mp3",
        "title": "thebrozone-istheinternetblackenoughforyou1-15-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-letthemachineliveyourfantasy1-08-12.mp3",
        "title": "thebrozone-letthemachineliveyourfantasy1-08-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newyear_sresbrolutions1-1-12.mp3",
        "title": "thebrozone-newyear_sresbrolutions1-1-12.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the7thannualwaronx-mas12-25-11.mp3",
        "title": "thebrozone-the7thannualwaronx-mas12-25-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thechaosbutton12-18-11.mp3",
        "title": "thebrozone-thechaosbutton12-18-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-whatthefuckradio12-11-11.mp3",
        "title": "thebrozone-whatthefuckradio12-11-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-babybluntz_newsyoumayormaynotbeabletousepart2_12-04-11.mp3",
        "title": "thebrozone-babybluntz_newsyoumayormaynotbeabletousepart2_12-04-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-newsyoumayormaynotbeabletouse11-27-11.mp3",
        "title": "thebrozone-newsyoumayormaynotbeabletouse11-27-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-pumpupthevolume11-20-11.mp3",
        "title": "thebrozone-pumpupthevolume11-20-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-hamsterdanceorarmadillodance11-13-11.mp3",
        "title": "thebrozone-hamsterdanceorarmadillodance11-13-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-kosmicunconciousness11-06-11.mp3",
        "title": "thebrozone-kosmicunconciousness11-06-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-integralpeace-makingandthevisionofaWorldFederation10-30-11.mp3",
        "title": "thebrozone-integralpeace-makingandthevisionofaWorldFederation10-30-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thetransmissionofnon-dualawareness10-23-11.mp3",
        "title": "thebrozone-thetransmissionofnon-dualawareness10-23-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-takin_ittothestreets10-16-11.mp3",
        "title": "thebrozone-takin_ittothestreets10-16-11.mp3"
    }
	,
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-androgyny_bisexualityandthecultivationofmasculineandfemininesexualenergy10-9-11.mp3",
        "title": "thebrozone-androgyny_bisexualityandthecultivationofmasculineandfemininesexualenergy10-9-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fuckitorkillit10-02-11.mp3",
        "title": "thebrozone-fuckitorkillit10-02-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-emotionalfreedomtechniques9-25-11.mp3",
        "title": "thebrozone-emotionalfreedomtechniques9-25-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thetechno-economiccenterofgravityandthedevelpmentallineoftheself9-18-11.mp3",
        "title": "thebrozone-thetechno-economiccenterofgravityandthedevelpmentallineoftheself9-18-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-divination_astrologyandthepre-transfallacy9-11-11.mp3",
        "title": "thebrozone-divination_astrologyandthepre-transfallacy9-11-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thedangersofevolution9-4-11.mp3",
        "title": "thebrozone-thedangersofevolution9-4-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-kosmicbaconstrips8-28-11.mp3",
        "title": "thebrozone-kosmicbaconstrips8-28-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-integralmap-making8-21-11.mp3",
        "title": "thebrozone-integralmap-making8-21-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepinballeffectpart58-14-11.mp3",
        "title": "thebrozone-thepinballeffectpart58-14-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepinballeffectpart48-7-11.mp3",
        "title": "thebrozone-thepinballeffectpart48-7-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepinballeffectpart37-31-11.mp3",
        "title": "thebrozone-thepinballeffectpart37-31-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepinballeffectpart27-24-11.mp3",
        "title": "thebrozone-thepinballeffectpart27-24-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepinballeffect7-17-11.mp3",
        "title": "thebrozone-thepinballeffect7-17-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-debtorsanonymous7-10-11.mp3",
        "title": "thebrozone-debtorsanonymous7-10-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-maribou7-3-11.mp3",
        "title": "thebrozone-maribou7-3-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bromitzvah_6-26-11.mp3",
        "title": "thebrozone-bromitzvah_6-26-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-anti-socialnetworking6-12-11.mp3",
        "title": "thebrozone-anti-socialnetworking6-12-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-charlesbro-kowski6-5-11.mp3",
        "title": "thebrozone-charlesbro-kowski6-5-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-tunnelhumUSA5-29-11.mp3",
        "title": "thebrozone-tunnelhumUSA5-29-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-mach-bromanrandysavage5-22-11.mp3",
        "title": "thebrozone-mach-bromanrandysavage5-22-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-atraditionalamericanwedding5-15-11.mp3",
        "title": "thebrozone-atraditionalamericanwedding5-15-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-toomanydicksonthedancefloor5-8-11.mp3",
        "title": "thebrozone-toomanydicksonthedancefloor5-8-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-brosamabinladen5-1-11.mp3",
        "title": "thebrozone-brosamabinladen5-1-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-easteregg-straveganza_4-24-11.mp3",
        "title": "thebrozone-easteregg-straveganza_4-24-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-fartsandcraftsaftermath4-17-11.mp3",
        "title": "thebrozone-fartsandcraftsaftermath4-17-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-bluedream4-10-11.mp3",
        "title": "thebrozone-bluedream4-10-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-414-2929-BRO4-3-11.mp3",
        "title": "thebrozone-414-2929-BRO4-3-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-suzieq3-27-11.mp3",
        "title": "thebrozone-suzieq3-27-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thepastofthefuture3-20-11.mp3",
        "title": "thebrozone-thepastofthefuture3-20-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-theotter3-13-11.mp3",
        "title": "thebrozone-theotter3-13-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-vitaminz3-6-11.mp3",
        "title": "thebrozone-vitaminz3-6-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-0+0=02-27-11.mp3",
        "title": "thebrozone-0+0=02-27-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-deadpresident_sday2-20-11.mp3",
        "title": "thebrozone-deadpresident_sday2-20-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-broedstep2-13-11.mp3",
        "title": "thebrozone-broedstep2-13-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-heavenisforkids2-06-11.mp3",
        "title": "thebrozone-heavenisforkids2-06-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-davidbrowie1-30-11.mp3",
        "title": "thebrozone-davidbrowie1-30-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-landlordpizzasatan1-23-11.mp3",
        "title": "thebrozone-landlordpizzasatan1-23-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-broedboattochina1-16-11.mp3",
        "title": "thebrozone-broedboattochina1-16-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-thelateshift1-9-10.mp3",
        "title": "thebrozone-thelateshift1-9-10.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-gimmeawasteblast_01-02-11.mp3",
        "title": "thebrozone-gimmeawasteblast_01-02-11.mp3"
    },
    {
        "date": "14 09 10",
        "id": 1,
        "path": "thebrozone-the1stannualmoronx-mas12-26-10.mp3",
        "title": "thebrozone-the1stannualmoronx-mas12-26-10.mp3"
	}
,
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-the6thannualwaronx-mas;thex-masattackzone12-19-10.mp3",
"title": "thebrozone-the6thannualwaronx-mas;thex-masattackzone12-19-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-dossisboss12-12-10.mp3",
"title": "thebrozone-dossisboss12-12-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-50cents12-05-10.mp3",
"title": "thebrozone-50cents12-05-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-walltowallmarinos11-28-10.mp3",
"title": "thebrozone-walltowallmarinos11-28-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hourofpower11-21-10.mp3",
"title": "thebrozone-hourofpower11-21-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-octobrofest11-14-10.mp3",
"title": "thebrozone-octobrofest11-14-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-racistagainstdwarves11-07-10.mp3",
"title": "thebrozone-racistagainstdwarves11-07-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-halloween-freeharvestcelebration10-31-10.mp3",
"title": "thebrozone-halloween-freeharvestcelebration10-31-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-kidsandmoney10-24-10.mp3",
"title": "thebrozone-kidsandmoney10-24-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-michaeljordanisgoingdownthetubes10-17-10.mp3",
"title": "thebrozone-michaeljordanisgoingdownthetubes10-17-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howhowwediedies10-10-10.mp3",
"title": "thebrozone-howhowwediedies10-10-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howwediepart6_AIDSedition_10-3-10.mp3",
"title": "thebrozone-howwediepart6_AIDSedition_10-3-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozonezone-howwediepart5_suicideedition_9-26-10.mp3",
"title": "thebrozonezone-howwediepart5_suicideedition_9-26-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howwediepart4_murderedition_9-19-10.mp3",
"title": "thebrozone-howwediepart4_murderedition_9-19-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howwediepart39-12-10.mp3",
"title": "thebrozone-howwediepart39-12-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howwediepart29-5-10.mp3",
"title": "thebrozone-howwediepart29-5-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howwedie8-29-10.mp3",
"title": "thebrozone-howwedie8-29-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-retirementliving8-22-10.mp3",
"title": "thebrozone-retirementliving8-22-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-petsfromhell8-15-10.mp3",
"title": "thebrozone-petsfromhell8-15-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-anamazingthingtowatch8-8-10.mp3",
"title": "thebrozone-anamazingthingtowatch8-8-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-strikeout8-01-10.mp3",
"title": "thebrozone-strikeout8-01-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hellno_wewon_tbro7-26-10.mp3",
"title": "thebrozone-hellno_wewon_tbro7-26-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-webuildyoujusttokillyou7-18-10.mp3",
"title": "thebrozone-webuildyoujusttokillyou7-18-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-rockmastercleanshouse6-11-10.mp3",
"title": "thebrozone-rockmastercleanshouse6-11-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thebrozone4thofjulysoundspectacularpart1.mp3",
"title": "thebrozone-thebrozone4thofjulysoundspectacularpart17/4/10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-vaderade6-27-10.mp3",
"title": "thebrozone-vaderade6-27-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-anotherbongbitesthedust6-20-10.mp3",
"title": "thebrozone-anotherbongbitesthedust6-20-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-brovana6-13-10.mp3",
"title": "thebrozone-brovana6-13-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-revengeofthestuff6-6-10.mp3",
"title": "thebrozone-revengeofthestuff6-6-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-notforhumanconsumption5-30-10.mp3",
"title": "thebrozone-notforhumanconsumption5-30-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-GoveN8er5-23-10.mp3",
"title": "thebrozone-goveN8er5-23-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howtobroitout5-16-10.mp3",
"title": "thebrozone-howtobroitout5-16-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-mother_sdayspectacular5-9-10.mp3",
"title": "thebrozone-mother_sdayspectacular5-9-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-theponetone5-02-10.mp3",
"title": "thebrozone-theponetone5-02-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thelezbromovement4-25-10.mp3",
"title": "thebrozone-thelezbromovement4-25-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-spammingforseawaste4-18-10.mp3",
"title": "thebrozone-spammingforseawaste4-18-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-welcometothebrozone4-11-10.mp3",
"title": "thebrozone-welcometothebrozone4-11-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-suspense4-04-10.mp3",
"title": "thebrozone-suspense4-04-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-canadavideowhips-SELLYOURRIDE_resin8remix3-28-10.mp3",
"title": "thebrozone-canadavideowhips-SELLYOURRIDE_resin8remix3-28-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-oceanjunk3-21-10.mp3",
"title": "thebrozone-oceanjunk3-21-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-brozonevs.theburrito3-14-10.mp3",
"title": "thebrozone-thebrozonevs.theburrito3-14-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-let_sseewhatitdoeswhenisaybrozone3-07-10.mp3",
"title": "thebrozone-let_sseewhatitdoeswhenisaybrozone3-07-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "20100228-Brozone-LoopDuplicatemoretalklessradio2-28-10.mp3",
"title": "thebrozone-moretalklessradio2-28-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thecalvalcadeofcallers2-21-10.mp3",
"title": "thebrozone-thecalvalcadeofcallers2-21-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-jackpotnohands2-14-10.mp3",
"title": "thebrozone-jackpotnohands2-14-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thenoooooooooooooooooooooooooooooooooooooozone2-07-10.mp3",
"title": "thebrozone-thenoooooooooooooooooooooooooooooooooooooozone2-07-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-erndogmurdermystery1-31-10.mp3",
"title": "thebrozone-erndogmurdermystery1-31-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-dumptruck1-24-10.mp3",
"title": "thebrozone-dumptruck1-24-10.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-the5thannualwaronx-mas12-27-09.mp3",
"title": "thebrozone-the5thannualwaronx-mas12-27-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thezone-insectdefensesystem12-20-09.mp3",
"title": "thezone-insectdefensesystem12-20-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thezone-hypercardreloaded12-13-09.mp3",
"title": "thezone-hypercardreloaded12-13-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thezone-hypercard12-6-09.mp3",
"title": "thezone-hypercard12-6-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thezone-reinduction11-29-09.mp3",
"title": "thezone-reinduction11-29-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thezone-westcoastsealion11-22-09.mp3",
"title": "thezone-westcoastsealion11-22-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-godseedfragments11-15-09.mp3",
"title": "thebrozone-godseedfragments11-15-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thegrandmotheroftimept211-08-09.mp3",
"title": "thebrozone-thegrandmotheroftimept211-08-09.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thelionsleepstonightpt110-01-09.mp3",
"title": "thebrozone-thelionsleepstonightpt111-01-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thelionsleepstonightpt210-01-09.mp3",
"title": "thebrozone-thelionsleepstonightpt211-01-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-thegrandmotheroftimept110-25-09.mp3",
"title": "thebrozone-thegrandmotheroftimept110-25-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-airportcollection10-18-09.mp3",
"title": "thebrozone-airportcollection10-18-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hhwereesch8-23-09.mp3",
"title": "thebrozone-hhwereesch8-23-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-itwasreal8-16-09.mp3",
"title": "thebrozone-itwasreal8-16-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-julie_stryin_askor8-09-09.mp3",
"title": "thebrozone-julie_stryin_askor8-09-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-pickupmylandlord8-02-09.mp3",
"title": "thebrozone-pickupmylandlord8-02-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-abastard_sworkisneverdone7-19-09.mp3",
"title": "thebrozone-abastard_sworkisneverdone7-19-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-planes_trainsandbro-out-omobiles7-12-09.mp3",
"title": "thebrozone-planes_trainsandbro-out-omobiles7-12-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-freeporno7-05-09.mp3",
"title": "thebrozone-freeporno7-05-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-if.mp3",
"title": "thebrozone-ifyouwannabestartin_somethin__thenyou_vegottabestartin_somethin_6-28-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hotsausageinjection6-21-09.mp3",
"title": "thebrozone-hotsausageinjection6-21-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-bluesharmonicaforthemusicalidiot6-14-09.mp3",
"title": "thebrozone-bluesharmonicaforthemusicalidiot6-14-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-lesbianchickenslayedibleeggs6-07-09.mp3",
"title": "thebrozone-lesbianchickenslayedibleeggs6-07-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hrashpripe5-24-09.mp3",
"title": "thebrozone-hrashpripe5-24-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-happybro-ther_sday5-10-09.mp3",
"title": "thebrozone-happybro-ther_sday5-10-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-goodnight_irene5-03-09.mp3",
"title": "thebrozone-goodnight_irene5-03-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hi.mp3",
"title": "thebrozone-hi_you_vereached7_4_pleaseleaveyourname_iwillgetbacktoyouassoonaspossible_pleasewaitforthebeep_thankyou4-26-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-followtheyellowbrickbroed3-08-09pt1.mp3",
"title": "thebrozone-followtheyellowbrickbroed3-08-09pt1"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-droppin_thepleathergroundhog-shapedhammer.mp3",
"title": "thebrozone-droppin_thepleathergroundhog-shapedhammer2-08-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-homoeroticmexicangrab-asswrestling1-25-09.mp3",
"title": "thebrozone-homoeroticmexicangrab-asswrestling1-25-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-bestdwarfaward01-11-09.mp3",
"title": "thebrozone-bestdwarfaward01-11-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-djinfinitejusticedj_syermama_swholehous.mp3",
"title": "thebrozone-djinfinitejusticedj_syermama_swholehouse1-04-09"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-4thannualwaronx-maspt112-21-08.mp3",
"title": "thebrozone-4thannualwaronx-maspt112-21-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-4thannualwaronx-maspt212-21-08.mp3",
"title": "thebrozone-4thannualwaronx-maspt212-21-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-everybody_sbirthday12-14-08.mp3",
"title": "thebrozone-everybody_sbirthday12-14-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-broingman11-23-08.mp3",
"title": "thebrozone-broingman11-23-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-brondage_dominanceandsade-bro-masochism11-16-08.mp3",
"title": "thebrozone-brondage_dominanceandsade-bro-masochism11-16-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-discosurvilancesystem11-02-08.mp3",
"title": "thebrozone-discosurvilancesystem11-02-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-frightsimulator10-12-08.mp3",
"title": "thebrozone-frightsimulator10-12-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-deathmcmuffin10-05-08.mp3",
"title": "thebrozone-deathmcmuffin10-05-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-3000mileshigh9-28-08.mp3",
"title": "thebrozone-3000mileshigh9-28-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-cybersexsucks9-14-08.mp3",
"title": "thebrozone-cybersexsucks9-14-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hookboog9-7-08.mp3",
"title": "thebrozone-hookboog9-7-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-datingtherussians8-31-08.mp3",
"title": "thebrozone-datingtherussians8-31-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-estatetrustlitigation_establishingevidence.mp3",
"title": "thebrozone-estatetrustlitigation_establishingevidencefortheestateplanfile7-14-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-difficultanswerstopracticalquestions7-06-08.mp3",
"title": "thebrozone-difficultanswerstopracticalquestions7-06-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-charitableremaindertrusts_what_shotandwhat_snot6-22-08.mp3",
"title": "thebrozone-charitableremaindertrusts_what_shotandwhat_snot6-22-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-inbronesia6-15-08.mp3",
"title": "thebrozone-inbronesia6-15-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-kurtbrobain6-08-08.mp3",
"title": "thebrozone-kurtbrobain6-08-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-calenderingandcasemanagementtechnology5-18-08.mp3",
"title": "thebrozone-calenderingandcasemanagementtechnology5-18-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-batteriesinyerbuttpt25-11-08.mp3",
"title": "thebrozone-batteriesinyerbuttpt25-11-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-hulkbrogan4-20-08.mp3",
"title": "thebrozone-hulkbrogan4-20-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-conflictsofdisinterest3-13-08.mp3",
"title": "thebrozone-conflictsofdisinterest3-13-08"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-broback12-09-07.mp3",
"title": "thebrozone-broback12-09-07"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-cysticfiBROsis10-28-07.mp3",
"title": "thebrozone-cysticfiBROsis10-28-07"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-aseedwithinaseed_dateunknown_.mp3",
"title": "thebrozone-aseedwithinaseed_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-alltogethernow_menandwomeninthelegalworkplace_dateunknown_.mp3",
"title": "thebrozone-alltogethernow_menandwomeninthelegalworkplace_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-howtomeasuresuccess_dateunknown_.mp3",
"title": "thebrozone-howtomeasuresuccess_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-dodgingthedraftpt1_dateunknown_.mp3",
"title": "thebrozone-dodgingthedraftpt1_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-freedumbzonept2_dateunknown_.mp3",
"title": "thebrozone-freedumbzonept2_dateunknown_.mp3"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-creatingapositivehomeenvironment_dateunknown_.mp3",
"title": "thebrozone-creatingapositivehomeenvironment_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-congratsdpt3_dateunknown_.mp3",
"title": "thebrozone-congratsdpt3_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-congratsdpt4_dateunknown_.mp3",
"title": "thebrozone-congratsdpt4_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-congratsdpt5_short__dateunknown_.mp3",
"title": "thebrozone-congratsdpt5_short__dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-brogasm_dateunknown_.mp3",
"title": "thebrozone-brogasm_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-brozonewriter_sstrike_dateunknown_.mp3",
"title": "thebrozone-brozonewriter_sstrike_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-don_ttas_mebro_dateunknown_.mp3",
"title": "thebrozone-don_ttas_mebro_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-horseytalkpt1_dateunknown_.mp3",
"title": "thebrozone-horseytalkpt1_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-horseytalkpt2_dateunknown_.mp3",
"title": "thebrozone-horseytalkpt2_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-ienjoybothpt1_dateunknown_.mp3",
"title": "thebrozone-ienjoybothpt1_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-ienjoybothpt2_dateunknown_.mp3",
"title": "thebrozone-ienjoybothpt2_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-ienjoybothpt3_dateunknown_.mp3",
"title": "thebrozone-ienjoybothpt3_dateunknown_"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-jacumbapt01.mp3",
"title": "thebrozone-jacumbapt01"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-inyourdomept1_dateunknown__firstepisodeever__.mp3",
"title": "thebrozone-inyourdomept1_dateunknown__firstepisodeever__"
},
{
"date": "14 09 10",
"id": 1,
"path": "thebrozone-inyourdomept2_dateunknown__firstepisodeever__.mp3",
"title": "thebrozone-inyourdomept2_dateunknown__firstepisodeever__"
}
]
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080c0f;
  margin: 0px;
  width:360px;
  max-height: 100%;
  min-height: 400px;
  /* background-color: lightblue; */
}
</style>
