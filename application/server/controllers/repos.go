package controllers

import (
	"backend/database"
	"backend/models"

	"gorm.io/gorm"
)

type Repos struct {
	UserDb      *gorm.DB
	CharacterDb *gorm.DB
	SpellDb     *gorm.DB
	ItemDb      *gorm.DB
}

func New() *Repos {
	userdb := database.InitDb()
	userdb.AutoMigrate(&models.User{})

	characterdb := database.InitDb()
	characterdb.AutoMigrate(&models.Character{})

	spelldb := database.InitDb()
	spelldb.AutoMigrate(&models.Spell{})

	itemdb := database.InitDb()
	itemdb.AutoMigrate(&models.Item{})

	return &Repos{UserDb: userdb, CharacterDb: characterdb, SpellDb: spelldb, ItemDb: itemdb}
}
