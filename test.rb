testbed_hstate={"12"=>"health","13"=>"unhealth"}
tastbed_utate={"12"=>"idle","13"=>"inuse"}
testbed_info=[{"id"=>"12","name"=>"testbed2"},{"id"=>"13","name"=>"testbed3"},{"id"=>"14","name"=>"testbed4"}]
testbde_hash={}
testbde_arr=[]
testbed_info.each{|testbed|
	testbde_hash["testbed_id"]=testbed["id"]
	testbde_hash["testbde_name"]=testbed["name"]
	testbde_hash["testbde_hstate"]=testbed_hstate[testbed["id"]]
	testbde_hash["testbde_utate"]=tastbed_utate[testbed["id"]]
	testbde_arr<<testbde_hash
}
p testbde_arr

