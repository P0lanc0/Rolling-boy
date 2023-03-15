_____________SCREENS_______________
'intro' = title/intro
'play' = when play is clicked(first game page)
'avoidrock' = when 'right' is clicked
'controck' = when 'continue-rock' is clicked
'no1' = When 'noroll' is clicked
'no2' = when 'noroll1' is clicked
'no3' = when 'noroll2' is clicked
'no4' = when 'noroll3' is clicked
'tes' = when 'norollend'is clicked 
'te1' = when 'continuehos' is clicked
'torolltown' = when 'yesroll' is clicked
'rolltown' = when 'continue-roll' is clicked
'inchurch' = when 'church' or 'leave' is clicked
'crown' = When 'rollchurch' is clicked
'banish' = when 'makespeech' is clicked
'lead' = when 'takecrown' is clicked
'years' = when 'contgod' is clicked
'offer' = when 'contyears' is clicked
'accept' = when 'poweryes' is clicked
'continuerule' = when 'contaccept' is clicked
_____________BUTTONS_______________
'left' = go to 'bad ending'(from 'play')
'right' = go to 'avoid rock'(from 'play')
'yesroll' = go to 'rolltown' (from 'controck'/'noroll-s')
'noroll' = go to 'no1' (from 'controck')
'noroll1' = go to 'no2'(from 'no1')
'noroll2' = go to 'no3' (from 'no2')
'noroll3' = go to 'no4' (from 'no3')
'norollend' go to 'true-ending' (from 'no4')
'comfort' = go to 'te2' (from 'te1')
'rollchurch' = go to 'crown' (from 'inchurch')
'makespeech' = go to 'banish' (from 'inchurch')
'takecrown' = go to 'lead' (from 'crown')
'donttake' = go to 'banish' (from 'crown')
'poweryes' = continue from 'offer' to 'accept' 
'powerno' = continue from 'offer' to 'good-ending'
_____________CONTINUE______________
'continuerock' = continue from 'avoidrock' to 'controck'
'continueroll' = continue from 'torolltown' to 'rolltown'
'continuehos' = continue from 'true-ending-start' to 'te1'
'continuecomfort' = continue from 'te2' to 'true-ending'
'contban' = continue from 'banish' to 'outrolltown'
'contout' = continue from 'outrolltown' to 'repeat ending'
'contgod' = continue from 'lead' to 'years'
'contyears' = continue from 'years' to 'offer'
'contaccept' = continue from 'accept' to 'continuerule'
'contrule' = continue from 'continuerule' to 'tyrant-ending'
'church' = go to 'inchurch' (from 'rolltown')
_____________ENDINGS_______________
'bad-ending' = when 'left' is clicked (from 'play')
'true-ending' = when 'continuecomfort' is clicked (from 'te2')
'tyrant-ending' = when 'contrule' is clicked
'good-ending' = when 'powerno' is clicked
'repeat-ending' = when 'contout' is clicked (from 'outrolltown')