ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting('immersive_aircraft:airship',[
		"SSSSS",
		" ~ ~ ",
		" H_EP",
		" HHH "
	  ],
	  {
		"H":"immersive_aircraft:hull",
		"E":"immersive_aircraft:engine",
		"P":"immersive_aircraft:propeller",
		"S":"immersive_aircraft:sail",
		"~": "minecraft:string",
		"_":"#create:seats"	
	  }
	)
	event.recipes.create.mechanical_crafting("immersive_aircraft:cargo_airship",
		[
	"BSSSB",
	"PSASP",
	"CCHCC",
	" HHH "
		  ],
		  {
			"A":"immersive_aircraft:airship",
			"H":"immersive_aircraft:hull",
			"B":"immersive_aircraft:boiler",
			"P":"immersive_aircraft:propeller",
			"S":"minecraft:string",
			"C":"minecraft:chest"
		  }
		)
	event.recipes.create.mechanical_crafting("immersive_aircraft:warship",
		[
			"  TTT  ",
			"SSS SSS",
			"SSSGSSS",
			" PECEB ",
			" HHHHH "
		  ],
		  {
			"T":"minecraft:string",
			"H":"immersive_aircraft:hull",
			"B":"immersive_aircraft:heavy_crossbow",
			"P":"immersive_aircraft:propeller",
			"E":"immersive_aircraft:engine",
			"S":"immersive_aircraft:sail",
			"G":"immersive_aircraft:industrial_gears",
			"C":"immersive_aircraft:cargo_airship"
		  }
		)	
	event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane',[
	"   S",
    "S PS",
    "TTE_",
    "S PS",
    "   S"
	  ],
	  {
		"T":"minecraft:stick",
		"E":"immersive_aircraft:boiler",
		"P":"immersive_aircraft:propeller",
		"S":"immersive_aircraft:sail",
		"_":"#create:seats"	
	  }
	)
	event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane',[
		"   I ",
		"IDDI ",
		"HHHBP",
		"IDDI ",
		"   I "
		  ],
		  {
			"I":"create:iron_sheet",
			"B":"immersive_aircraft:biplane",
			"P":"immersive_aircraft:propeller",
			"H":"immersive_aircraft:hull",
			"D":"red_dye"	
		  }
		)
	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane',[
		"   S ",
		"S  S ",
		"HH_EP",
		"S  S ",
		"   S "
		  ],
		  {
			"S":"immersive_aircraft:sail",
			"H":"immersive_aircraft:hull",
			"E":"immersive_aircraft:engine",
			"P":"immersive_aircraft:propeller",
			"_":"#create:seats"
		  }
		)
	event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter',[
		" _ ",
		"PBP",
		"BEB",
		"PBP"
		  ],
		  {
			"B":"minecraft:bamboo",
			"E":"immersive_aircraft:engine",
			"P":"immersive_aircraft:propeller",
			"_":"#create:seats"
		  }
		)
	event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne',[
		"  P  ",
		"  _  ",
		"SHMHS",
		"  H  "
		  ],
		  {
			"M":"create:precision_mechanism",
			"H":"immersive_aircraft:hull",
			"S":"immersive_aircraft:sail",
			"P":"immersive_aircraft:propeller",
			"_":"#create:seats"
		  }
		)

	//remove old recipes
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:airship"})
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:cargo_airship"})
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:warship"})
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:biplane"})
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:quadrocopter"})
	event.remove({type:"minecraft:crafting_shaped", output:"immersive_aircraft:gyrodyne"})
	event.remove({type:"minecraft:crafting_shaped", output:"man_of_many_planes:economy_plane"})	
	event.remove({type:"minecraft:crafting_shaped", output:"man_of_many_planes:scarlet_biplane"})
	}
)
