import pygame
from sys import exit

# CONSTANTS
Widht_Main, Widht_grid, Height_Main, Height_Grid = 800, 400, 600, 300
screen = pygame.display.set_mode((Widht_Main, Height_Main))  # Opening the window
pygame.display.set_caption('BattleShips')  # The name of the game
BLACK = (0, 0, 0)


def DrawGrid():
    blockSize = 30  # Set the size of the grid block
    for x in range(Widht_Main):
        for y in range(Height_Main):
            if 200 < x * blockSize < 500 and 100 < y * blockSize < 400:  # Putting the grid in a normal place
                rect = pygame.Rect(x * blockSize, y * blockSize, blockSize, blockSize)
                pygame.draw.rect(screen, BLACK, rect, 1)


def main():
    pygame.init()
    clock = pygame.time.Clock()  # import for time and fps
    test_surface = pygame.image.load('Graphics/water.png')  # importing the backgrounds

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # Runs until the user exits the window
                pygame.quit()
                exit()

        screen.blit(test_surface, (0, 0))
        DrawGrid()
        pygame.display.update()
        clock.tick(60)  # limits the fps to 60


if __name__ == '__main__':
    main()
