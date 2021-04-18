<template>
    <AudioAppContainer/>
    <Tracks :tracks="tracks" />
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
		"id": [],
		"date": "14 09 10",
		"path": "the brozone- fuck it or kill it  10-02-11.mp3",
		"title": "the brozone- fuck it or kill it  10-02-11.mp3"
	},	
	{
		"id": [],
		"date": "15 10 75",
		"path": "the brozone- emotional freedom techniques  9-25-11.mp3",
		"title": "the brozone- emotional freedom techniques  9-25-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the techno-economic center of gravity and the develpmental line of the self  9-18-11.mp3",
		"title": "the brozone- the techno-economic center of gravity and the develpmental line of the self  9-18-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- divination, astrology and the pre-trans fallacy  9-11-11.mp3",
		"title": "the brozone- divination, astrology and the pre-trans fallacy  9-11-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the dangers of evolution  9-4-11.mp3",
		"title": "the brozone- the dangers of evolution  9-4-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- kosmic bacon strips  8-28-11.mp3",
		"title": "the brozone- kosmic bacon strips  8-28-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- integral map-making  8-21-11.mp3",
		"title": "the brozone- integral map-making  8-21-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pinball effect part 5  8-14-11.mp3",
		"title": "the brozone- the pinball effect part 5  8-14-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pinball effect part 4  8-7-11.mp3",
		"title": "the brozone- the pinball effect part 4  8-7-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pinball effect part 3  7-31-11.mp3",
		"title": "the brozone- the pinball effect part 3  7-31-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pinball effect part 2  7-24-11.mp3",
		"title": "the brozone- the pinball effect part 2  7-24-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pinball effect  7-17-11.mp3",
		"title": "the brozone- the pinball effect  7-17-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- maribou  7-3-11.mp3",
		"title": "the brozone- maribou  7-3-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- bro mitzvah!  6-26-11.mp3",
		"title": "the brozone- bro mitzvah!  6-26-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- anti-social networking  6-12-11.mp3",
		"title": "the brozone- anti-social networking  6-12-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- charles bro-kowski  6-5-11.mp3",
		"title": "the brozone- charles bro-kowski  6-5-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- tunnel hum USA  5-29-11.mp3",
		"title": "the brozone- tunnel hum USA  5-29-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- mach-bro man randy savage  5-22-11.mp3",
		"title": "the brozone- mach-bro man randy savage  5-22-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- a traditional american wedding  5-15-11.mp3",
		"title": "the brozone- a traditional american wedding  5-15-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- too many dicks on the dancefloor  5-8-11.mp3",
		"title": "the brozone- too many dicks on the dancefloor  5-8-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brosama bin laden  5-1-11.mp3",
		"title": "the brozone- brosama bin laden  5-1-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- easter egg-straveganza!  4-24-11.mp3",
		"title": "the brozone- easter egg-straveganza!  4-24-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- farts and crafts aftermath  4-17-11.mp3",
		"title": "the brozone- farts and crafts aftermath  4-17-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- blue dream  4-10-11.mp3",
		"title": "the brozone- blue dream  4-10-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 414-2929-BRO  4-3-11.mp3",
		"title": "the brozone- 414-2929-BRO  4-3-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- suzie q  3-27-11.mp3",
		"title": "the brozone- suzie q  3-27-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the past of the future  3-20-11.mp3",
		"title": "the brozone- the past of the future  3-20-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the otter  3-13-11.mp3",
		"title": "the brozone- the otter  3-13-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- vitamin z  3-6-11.mp3",
		"title": "the brozone- vitamin z  3-6-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 0 + 0 = 0  2-27-11.mp3",
		"title": "the brozone- 0 + 0 = 0  2-27-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- dead president's day  2-20-11.mp3",
		"title": "the brozone- dead president's day  2-20-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- broedstep  2-13-11.mp3",
		"title": "the brozone- broedstep  2-13-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- heaven is for kids  2-06-11.mp3",
		"title": "the brozone- heaven is for kids  2-06-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- david browie  1-30-11.mp3",
		"title": "the brozone- david browie  1-30-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- landlord pizza satan  1-23-11.mp3",
		"title": "the brozone- landlord pizza satan  1-23-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- broed boat to china  1-16-11.mp3",
		"title": "the brozone- broed boat to china  1-16-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the late shift  1-9-10.mp3",
		"title": "the brozone- the late shift  1-9-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- gimme a waste blast!  01-02-11.mp3",
		"title": "the brozone- gimme a waste blast!  01-02-11.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the 1st annual moron x-mas  12-26-10.mp3",
		"title": "the brozone- the 1st annual moron x-mas  12-26-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the 6th annual war on x-mas; the x-mas attack zone  12-19-10.mp3",
		"title": "the brozone- the 6th annual war on x-mas; the x-mas attack zone  12-19-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- doss is boss  12-12-10.mp3",
		"title": "the brozone- doss is boss  12-12-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 50 cents  12-05-10.mp3",
		"title": "the brozone- 50 cents  12-05-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- wall to wall marinos  11-28-10.mp3",
		"title": "the brozone- wall to wall marinos  11-28-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hour of power  11-21-10.mp3",
		"title": "the brozone- hour of power  11-21-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- octobrofest  11-14-10.mp3",
		"title": "the brozone- octobrofest  11-14-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- racist against dwarves  11-07-10.mp3",
		"title": "the brozone- racist against dwarves  11-07-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- halloween-free harvest celebration  10-31-10.mp3",
		"title": "the brozone- halloween-free harvest celebration  10-31-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- kids and money  10-24-10.mp3",
		"title": "the brozone- kids and money  10-24-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- michael jordan is going down the tubes  10-17-10.mp3",
		"title": "the brozone- michael jordan is going down the tubes  10-17-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how how we die dies  10-10-10.mp3",
		"title": "the brozone- how how we die dies  10-10-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how we die part 6 (AIDS edition)  10-3-10.mp3",
		"title": "the brozone- how we die part 6 (AIDS edition)  10-3-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone zone- how we die part 5 (suicide edition)  9-26-10.mp3",
		"title": "the brozone zone- how we die part 5 (suicide edition)  9-26-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how we die part 4 (murder edition)  9-19-10.mp3",
		"title": "the brozone- how we die part 4 (murder edition)  9-19-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how we die part 3  9-12-10.mp3",
		"title": "the brozone- how we die part 3  9-12-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how we die part 2  9-5-10.mp3",
		"title": "the brozone- how we die part 2  9-5-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how we die  8-29-10.mp3",
		"title": "the brozone- how we die  8-29-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- retirement living  8-22-10.mp3",
		"title": "the brozone- retirement living  8-22-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- pets from hell  8-15-10.mp3",
		"title": "the brozone- pets from hell  8-15-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- an amazing thing to watch  8-8-10.mp3",
		"title": "the brozone- an amazing thing to watch  8-8-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- strike out  8-01-10.mp3",
		"title": "the brozone- strike out  8-01-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hell no, we won't bro  7-26-10.mp3",
		"title": "the brozone- hell no, we won't bro  7-26-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- we build you just to kill you  7-18-10.mp3",
		"title": "the brozone- we build you just to kill you  7-18-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- rock master cleans house  6-11-10.mp3",
		"title": "the brozone- rockmaster cleans house  6-11-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the brozone 4th of july sound spectacular part 1.mp3",
		"title": "the brozone- the brozone 4th of july sound spectacular part 1  7/4/10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- vaderade  6-27-10.mp3",
		"title": "the brozone- vaderade  6-27-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- another bong bites the dust  6-20-10.mp3",
		"title": "the brozone- another bong bites the dust  6-20-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brovana  6-13-10.mp3",
		"title": "the brozone- brovana  6-13-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- revenge of the stuff  6-6-10.mp3",
		"title": "the brozone- revenge of the stuff  6-6-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- not for human consumption  5-30-10.mp3",
		"title": "the brozone- not for human consumption  5-30-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "thebrozone - GoveN8er  5-23-10.mp3",
		"title": "the brozone - goveN8er  5-23-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how to bro it out  5-16-10.mp3",
		"title": "the brozone- how to bro it out  5-16-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- mother's day spectacular  5-9-10.mp3",
		"title": "the brozone- mother's day spectacular  5-9-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the pone tone  5-02-10.mp3",
		"title": "the brozone- the pone tone  5-02-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the lezbro movement  4-25-10.mp3",
		"title": "the brozone- the lezbro movement  4-25-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- spamming for sea waste  4-18-10.mp3",
		"title": "the brozone- spamming for sea waste  4-18-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- welcome to the brozone  4-11-10.mp3",
		"title": "the brozone- welcome to the brozone  4-11-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone-suspense  4-04-10.mp3",
		"title": "the brozone-suspense  4-04-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- canada video whips - SELL YOUR RIDE! resin8 remix 3-28-10.mp3",
		"title": "the brozone- canada video whips - SELL YOUR RIDE! resin8 remix 3-28-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- ocean junk  3-21-10.mp3",
		"title": "the brozone- ocean junk  3-21-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brozone vs. the burrito  3-14-10.mp3",
		"title": "the brozone- the brozone vs. the burrito  3-14-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- let's see what it does when i say brozone  3-07-10.mp3",
		"title": "the brozone- let's see what it does when i say brozone  3-07-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "20100228-Brozone-LoopDuplicate more talk less radio  2-28-10.mp3",
		"title": "the brozone- more talk less radio  2-28-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the calvalcade of callers  2-21-10.mp3",
		"title": "the brozone- the calvalcade of callers  2-21-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- jackpot no hands  2-14-10.mp3",
		"title": "the brozone- jackpot no hands  2-14-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the noooooooooooooooooooooooooooooooooooooo zone  2-07-10.mp3",
		"title": "the brozone- the noooooooooooooooooooooooooooooooooooooo zone  2-07-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- ern dog murder mystery  1-31-10.mp3",
		"title": "the brozone- ern dog murder mystery  1-31-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- dumptruck  1-24-10.mp3",
		"title": "the brozone- dumptruck  1-24-10.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the 5th annual war on x-mas  12-27-09.mp3",
		"title": "the brozone- the 5th annual war on x-mas  12-27-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the zone- insect defense system  12-20-09.mp3",
		"title": "the zone- insect defense system  12-20-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the zone- hypercard reloaded  12-13-09.mp3",
		"title": "the zone- hypercard reloaded  12-13-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the zone- hypercard  12-6-09.mp3",
		"title": "the zone- hypercard  12-6-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the zone- reinduction  11-29-09.mp3",
		"title": "the zone- reinduction  11-29-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the zone- westcoast sealion  11-22-09.mp3",
		"title": "the zone- westcoast sealion  11-22-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- godseed fragments  11-15-09.mp3",
		"title": "the brozone- godseed fragments  11-15-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the grandmother of time pt2  11-08-09.mp3",
		"title": "the brozone- the grandmother of time pt2  11-08-09.mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the lion sleeps tonight pt1  10-01-09.mp3",
		"title": "the brozone- the lion sleeps tonight pt1  11-01-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the lion sleeps tonight pt2  10-01-09.mp3",
		"title": "the brozone- the lion sleeps tonight pt2  11-01-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- the grandmother of time pt1  10-25-09.mp3",
		"title": "the brozone- the grandmother of time pt1  10-25-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- airport collection  10-18-09.mp3",
		"title": "the brozone- airport collection  10-18-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hhwereesch  8-23-09.mp3",
		"title": "the brozone- hhwereesch  8-23-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- it was real  8-16-09.mp3",
		"title": "the brozone- it was real  8-16-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- julie's tryin' a skor  8-09-09.mp3",
		"title": "the brozone- julie's tryin' a skor  8-09-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- pick up my landlord  8-02-09.mp3",
		"title": "the brozone- pick up my landlord  8-02-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- a bastard's work is never done  7-19-09.mp3",
		"title": "the brozone- a bastard's work is never done  7-19-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- planes, trains and bro-out-omobiles  7-12-09.mp3",
		"title": "the brozone- planes, trains and bro-out-omobiles  7-12-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- free porno  7-05-09.mp3",
		"title": "the brozone- free porno  7-05-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- if .mp3",
		"title": "the brozone- if you wanna be startin' somethin', then you've gotta be startin' somethin'  6-28-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hot sausage injection  6-21-09.mp3",
		"title": "the brozone- hot sausage injection  6-21-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- blues harmonica for the musical idiot  6-14-09.mp3",
		"title": "the brozone- blues harmonica for the musical idiot  6-14-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- lesbian chickens lay edible eggs  6-07-09.mp3",
		"title": "the brozone- lesbian chickens lay edible eggs  6-07-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hrash pripe  5-24-09.mp3",
		"title": "the brozone- hrash pripe  5-24-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- happy bro-ther's day  5-10-09.mp3",
		"title": "the brozone- happy bro-ther's day  5-10-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- goodnight, irene  5-03-09.mp3",
		"title": "the brozone- goodnight, irene  5-03-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hi.mp3",
		"title": "the brozone- hi, you've reached 7, 4, please leave your name, i will get back to you as soon as possible, please wait for the beep, thank you  4-26-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- follow the yellow brick broed  3-08-09 pt1.mp3",
		"title": "the brozone- follow the yellow brick broed  3-08-09 pt1"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- droppin' the pleather ground hog-shaped hammer.mp3",
		"title": "the brozone- droppin' the pleather ground hog-shaped hammer  2-08-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- homoerotic mexican grab-ass wrestling  1-25-09.mp3",
		"title": "the brozone- homoerotic mexican grab-ass wrestling  1-25-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- best dwarf award  01-11-09.mp3",
		"title": "the brozone- best dwarf award  01-11-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- dj infinite justice dj's yer mama's whole hous.mp3",
		"title": "the brozone- dj infinite justice dj's yer mama's whole house  1-04-09"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 4th annual war on x-mas pt 1  12-21-08.mp3",
		"title": "the brozone- 4th annual war on x-mas pt 1  12-21-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 4th annual war on x-mas pt 2  12-21-08.mp3",
		"title": "the brozone- 4th annual war on x-mas pt 2  12-21-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- everybody's birthday  12-14-08.mp3",
		"title": "the brozone- everybody's birthday  12-14-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- broing man  11-23-08.mp3",
		"title": "the brozone- broing man  11-23-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brondage, dominance and sade-bro-masochism  11-16-08.mp3",
		"title": "the brozone- brondage, dominance and sade-bro-masochism  11-16-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- disco survilance system  11-02-08.mp3",
		"title": "the brozone- disco survilance system  11-02-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- fright simulator  10-12-08.mp3",
		"title": "the brozone- fright simulator  10-12-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- death mcmuffin  10-05-08.mp3",
		"title": "the brozone- death mcmuffin  10-05-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- 3000 miles high  9-28-08.mp3",
		"title": "the brozone- 3000 miles high  9-28-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- cybersex sucks  9-14-08.mp3",
		"title": "the brozone- cybersex sucks  9-14-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hook boog  9-7-08.mp3",
		"title": "the brozone- hook boog  9-7-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- dating the russians  8-31-08.mp3",
		"title": "the brozone- dating the russians  8-31-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- estate trust litigation, establishing evidence.mp3",
		"title": "the brozone- estate trust litigation, establishing evidence for the estate plan file  7-14-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- difficult answers to practical questions  7-06-08.mp3",
		"title": "the brozone- difficult answers to practical questions  7-06-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- charitable remainder trusts, what's hot and what's not  6-22-08.mp3",
		"title": "the brozone- charitable remainder trusts, what's hot and what's not  6-22-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- inbronesia  6-15-08.mp3",
		"title": "the brozone- inbronesia  6-15-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- kurt brobain  6-08-08.mp3",
		"title": "the brozone- kurt brobain  6-08-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- calendering and case management technology  5-18-08.mp3",
		"title": "the brozone- calendering and case management technology  5-18-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- batteries in yer butt pt 2  5-11-08.mp3",
		"title": "the brozone- batteries in yer butt pt 2  5-11-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- hulk brogan  4-20-08.mp3",
		"title": "the brozone- hulk brogan  4-20-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- conflicts of disinterest  3-13-08.mp3",
		"title": "the brozone- conflicts of disinterest  3-13-08"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- broback 12-09-07.mp3",
		"title": "the brozone- broback 12-09-07"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- cystic fiBROsis 10-28-07.mp3",
		"title": "the brozone- cystic fiBROsis 10-28-07"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- a seed within a seed  (date unknown).mp3",
		"title": "the brozone- a seed within a seed  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- all together now, men and women in the legal workplace  (date unknown).mp3",
		"title": "the brozone- all together now, men and women in the legal workplace  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- how to measure success  (date unknown).mp3",
		"title": "the brozone- how to measure success  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- dodging the draft pt 1  (date unknown).mp3",
		"title": "the brozone- dodging the draft pt 1  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- freedumb zone pt2 (date unknown).mp3.mp3",
		"title": "the brozone- freedumb zone pt2 (date unknown).mp3"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- creating a positive home environment  (date unknown).mp3",
		"title": "the brozone- creating a positive home environment  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- congrats d pt 3  (date unknown).mp3",
		"title": "the brozone- congrats d pt 3  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- congrats d pt 4  (date unknown).mp3",
		"title": "the brozone- congrats d pt 4  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- congrats d pt 5 (short)  (date unknown).mp3",
		"title": "the brozone- congrats d pt 5 (short)  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brogasm  (date unknown).mp3",
		"title": "the brozone- brogasm  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- brozone writer's strike  (date unknown).mp3",
		"title": "the brozone- brozone writer's strike  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- don't tas' me bro (date unknown).mp3",
		"title": "the brozone- don't tas' me bro (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- horsey talk pt1  (date unknown).mp3",
		"title": "the brozone- horsey talk pt1  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- horsey talk pt2  (date unknown).mp3",
		"title": "the brozone- horsey talk pt2  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- i enjoy both pt1  (date unknown).mp3",
		"title": "the brozone- i enjoy both pt1  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- i enjoy both pt2  (date unknown).mp3",
		"title": "the brozone- i enjoy both pt2  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- i enjoy both pt3  (date unknown).mp3",
		"title": "the brozone- i enjoy both pt3  (date unknown)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- jacumba pt 01.mp3",
		"title": "the brozone- jacumba pt 01"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- in your dome pt1  (date unknown)  (first episode ever!).mp3",
		"title": "the brozone- in your dome pt1  (date unknown)  (first episode ever!)"
	},	
	{
		"id": [],
		"date": "25 12 22",
		"path": "the brozone- in your dome pt2  (date unknown)  (first episode ever!).mp3",
		"title": "the brozone- in your dome pt2  (date unknown)  (first episode ever!)"
	}
]
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080c0f;
  margin-top: default;
  width:100%;
  max-height: 100%;
  min-height: 400px;
  background-color: lightblue;
}
</style>
