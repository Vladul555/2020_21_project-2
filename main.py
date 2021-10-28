import pygame
from sys import exit

pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))  ##Opening the window
pygame.display.set_caption('BattleShips')  ##The name of the window
clock = pygame.time.Clock()  ## import for time and fps

test_surface = pygame.image.load('Graphics/water.png')


while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  ## Runs until the user exits the window
            pygame.quit()
            exit()

    screen.blit(test_surface, (0, 0))

    pygame.display.update()
    clock.tick(60)  ## limits the fps to 60

