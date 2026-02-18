#!/usr/bin/env python3
import asyncio
import random
"""THis is async"""

async def wait_random(max_delay):
    """This is async func"""
    result = random.uniform(0, max_delay)
    await asyncio.sleep(result)
    return result
