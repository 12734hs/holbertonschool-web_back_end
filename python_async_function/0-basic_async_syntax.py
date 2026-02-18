#!/usr/bin/env python3
import asyncio
import random
"""THis is async"""


async def wait_random(max_delay: int = 5) -> float:
    """This is async func"""
    result: float = random.uniform(0, max_delay)
    await asyncio.sleep(result)
    return result
