-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ajodebruja
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ajodebruja
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ajodebruja` DEFAULT CHARACTER SET utf8 ;
USE `ajodebruja` ;

-- -----------------------------------------------------
-- Table `ajodebruja`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajodebruja`.`clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido_pa` VARCHAR(50) NOT NULL,
  `apellido_ma` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ajodebruja`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajodebruja`.`categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ajodebruja`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajodebruja`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `imagen` BLOB NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `id_cliente`, `id_categoria`),
  INDEX `fk_productos_clientes_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `fk_productos_categorias1_idx` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_clientes`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `ajodebruja`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `ajodebruja`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ajodebruja`.`registros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajodebruja`.`registros` (
  `id_registro` INT NOT NULL AUTO_INCREMENT,
  `nombre_completo` VARCHAR(200) NOT NULL,
  `telefono` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_registro`, `id_cliente`),
  INDEX `fk_registros_clientes1_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_registros_clientes1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `ajodebruja`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ajodebruja`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajodebruja`.`pedidos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad_productos` INT NOT NULL,
  `precio_total` DECIMAL(10,2) NOT NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pedido`, `id_cliente`),
  INDEX `fk_pedidos_clientes1_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `ajodebruja`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER TABLE `ajodebruja`.`clientes`
MODIFY COLUMN `telefono` BIGINT;

ALTER TABLE `ajodebruja`.`productos`
MODIFY COLUMN `imagen` LONGBLOB;

ALTER TABLE `ajodebruja`.`registros`
MODIFY COLUMN `telefono` BIGINT;
