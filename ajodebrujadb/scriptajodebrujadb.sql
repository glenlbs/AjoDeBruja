-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema AjoDeBruja
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema AjoDeBruja
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AjoDeBruja` DEFAULT CHARACTER SET utf8 ;
USE `AjoDeBruja` ;

-- -----------------------------------------------------
-- Table `AjoDeBruja`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AjoDeBruja`.`categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AjoDeBruja`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AjoDeBruja`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AjoDeBruja`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AjoDeBruja`.`pedidos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad_productos` INT NOT NULL,
  `precio_total` DECIMAL(10,2) NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pedido`, `id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AjoDeBruja`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AjoDeBruja`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `imagen` VARCHAR(50) NOT NULL,
  `id_categoria` INT NOT NULL,
  `id_pedido` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `id_categoria`, `id_pedido`, `id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AjoDeBruja`.`registros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AjoDeBruja`.`registros` (
  `id_registro` INT NOT NULL AUTO_INCREMENT,
  `nombre_completo` VARCHAR(200) NOT NULL,
  `telefono` BIGINT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_registro`, `id_usuario`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;