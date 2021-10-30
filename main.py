from sys import exit

import pygame

# CONSTANTS
Width_Main, Width_grid, Height_Main, Height_Grid = 800, 400, 600, 300
screen = pygame.display.set_mode((Width_Main, Height_Main))  # Opening the window
pygame.display.set_caption('BattleShips')  # The name of the game
BLACK = (0, 0, 0)
ABC = '0ABCDEFGHIG'

board = []  # Making a board
for x in range(11):
    board.append(["O"] * 11)


def draw_grid():
    blockSize = 30  # Set the size of the grid block
    for x in range(Width_Main):
        for y in range(Height_Main):
            if 200 < x * blockSize < 520 and 100 < y * blockSize < 430:  # Putting the grid in a normal place
                rect = pygame.Rect(x * blockSize, y * blockSize, blockSize, blockSize)
                pygame.draw.rect(screen, BLACK, rect, 1)


class Ship:  # A Class for the ships
    def __init__(self, size):
        self.size = size


def Board(board):
    for row in board:
        print(" ".join(row))


def main():
    pygame.init()
    clock = pygame.time.Clock()  # import for time and fps
    test_surface = pygame.image.load('Graphics/water.png')  # importing the backgrounds
    Board(board)

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # Runs until the user exits the window
                pygame.quit()
                exit()

        screen.blit(test_surface, (0, 0))
        draw_grid()
        pygame.display.update()
        clock.tick(60)  # limits the fps to 60


if __name__ == '__main__':
    main()
